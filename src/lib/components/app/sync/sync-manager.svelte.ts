import type {
    Section,
    Block,
    SectionDefinition,
    BlockDefinition,
    SectionPreset
} from '$lib/types/section';

class SyncManager {
    private sections = $state<Section[]>([]);
    private sectionDefinitions = $state(new Map<string, SectionDefinition>());
    private history = $state<Array<Section[]>>([]);
    private historyIndex = $state(-1);

    // Derived states
    sectionCount = $derived(this.sections.length);
    canUndo = $derived(this.historyIndex > 0);
    canRedo = $derived(this.historyIndex < this.history.length - 1);

    constructor() {
        this.initializeHistory();
    }

    private initializeHistory(): void {
        this.history = [[]];
        this.historyIndex = 0;
    }

    // Section Definition Management
    registerSectionDefinition(definition: SectionDefinition): void {
        this.sectionDefinitions.set(definition.type, definition);
    }

    getSectionDefinition(type: string): SectionDefinition | undefined {
        return this.sectionDefinitions.get(type);
    }
    getSections(): Section[] {
        return this.sections;
    }

    // Section Management
    addSection(type: string, index?: number): Section | null {
        const definition = this.sectionDefinitions.get(type);
        if (!definition) return null;

        // Check section limit
        const currentCount = this.sections.filter(s => s.type === type).length;
        if (definition.limit && currentCount >= definition.limit) {
            throw new Error(`Section limit reached for type: ${type}`);
        }

        const newSection: Section = {
            id: crypto.randomUUID(),
            type,
            settings: this.getDefaultSettings(definition),
            blocks: []
        };

        const insertIndex = index ?? this.sections.length;
        const newSections = [...this.sections];
        newSections.splice(insertIndex, 0, newSection);

        this.updateSections(newSections);
        return newSection;
    }

    addSectionFromPreset(type: string, presetName: string, index?: number): Section | null {
        const definition = this.sectionDefinitions.get(type);
        if (!definition) return null;

        const preset = definition.presets?.find(p => p.name === presetName);
        if (!preset) return null;

        const newSection: Section = {
            id: crypto.randomUUID(),
            type,
            settings: { ...preset.settings },
            blocks: preset.blocks?.map(block => ({
                id: crypto.randomUUID(),
                type: block.type,
                settings: { ...block.settings }
            })) || []
        };

        const insertIndex = index ?? this.sections.length;
        const newSections = [...this.sections];
        newSections.splice(insertIndex, 0, newSection);

        this.updateSections(newSections);
        return newSection;
    }

    removeSection(sectionId: string): void {
        this.updateSections(this.sections.filter(s => s.id !== sectionId));
    }

    updateSectionSettings(sectionId: string, settings: Record<string, any>): void {
        const newSections = this.sections.map(section => {
            if (section.id === sectionId) {
                return { ...section, settings: { ...section.settings, ...settings } };
            }
            return section;
        });
        this.updateSections(newSections);
    }

    // Block Management
    addBlock(sectionId: string, blockType: string): Block | null {
        const sectionIndex = this.sections.findIndex(s => s.id === sectionId);
        if (sectionIndex === -1) return null;

        const section = this.sections[sectionIndex];
        const definition = this.sectionDefinitions.get(section.type);
        const blockDefinition = definition?.blocks?.find(b => b.type === blockType);

        if (!blockDefinition) return null;

        // Check block limit
        const currentBlockCount = section.blocks?.filter(b => b.type === blockType).length ?? 0;
        if (blockDefinition.limit && currentBlockCount >= blockDefinition.limit) {
            throw new Error(`Block limit reached for type: ${blockType}`);
        }

        const newBlock: Block = {
            id: crypto.randomUUID(),
            type: blockType,
            settings: this.getDefaultBlockSettings(blockDefinition)
        };

        const newSections = [...this.sections];
        newSections[sectionIndex] = {
            ...section,
            blocks: [...(section.blocks || []), newBlock]
        };

        this.updateSections(newSections);
        return newBlock;
    }

    removeBlock(sectionId: string, blockId: string): void {
        const newSections = this.sections.map(section => {
            if (section.id === sectionId) {
                return {
                    ...section,
                    blocks: section.blocks?.filter(block => block.id !== blockId) || []
                };
            }
            return section;
        });
        this.updateSections(newSections);
    }

    updateBlockSettings(sectionId: string, blockId: string, settings: Record<string, any>): void {
        const newSections = this.sections.map(section => {
            if (section.id === sectionId) {
                return {
                    ...section,
                    blocks: section.blocks?.map(block => {
                        if (block.id === blockId) {
                            return { ...block, settings: { ...block.settings, ...settings } };
                        }
                        return block;
                    }) || []
                };
            }
            return section;
        });
        this.updateSections(newSections);
    }

    // Reordering
    reorderSections(sourceIndex: number, targetIndex: number): void {
        const newSections = [...this.sections];
        const [removed] = newSections.splice(sourceIndex, 1);
        newSections.splice(targetIndex, 0, removed);
        this.updateSections(newSections);
    }

    reorderBlocks(sectionId: string, sourceIndex: number, targetIndex: number): void {
        const newSections = this.sections.map(section => {
            if (section.id === sectionId && section.blocks) {
                const blocks = [...section.blocks];
                const [removed] = blocks.splice(sourceIndex, 1);
                blocks.splice(targetIndex, 0, removed);
                return { ...section, blocks };
            }
            return section;
        });
        this.updateSections(newSections);
    }

    // History Management
    private updateSections(sections: Section[]): void {
        // Remove any future history states if we're not at the end
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }

        // Add new state to history
        this.history = [...this.history, JSON.parse(JSON.stringify(sections))];
        this.historyIndex = this.history.length - 1;

        // Update sections
        this.sections = sections;
    }
    // updateSection setting <key, value>
    updateSectionSetting(sectionId: string, key: string, value: any) {
        const index = this.sections.findIndex(section => section.id === sectionId);
        if (index === -1) return;
        this.sections[index].settings[key] = value;
    }

    undo(): void {
        if (this.canUndo) {
            this.historyIndex--;
            this.sections = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
        }
    }

    redo(): void {
        if (this.canRedo) {
            this.historyIndex++;
            this.sections = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
        }
    }

    // Utility Methods
    private getDefaultSettings(definition: SectionDefinition): Record<string, any> {
        return definition.settings.reduce((acc, setting) => {
            acc[setting.id] = setting.default;
            return acc;
        }, {} as Record<string, any>);
    }

    private getDefaultBlockSettings(definition: BlockDefinition): Record<string, any> {
        return definition.settings.reduce((acc, setting) => {
            acc[setting.id] = setting.default;
            return acc;
        }, {} as Record<string, any>);
    }

    // Import/Export
    exportTheme(): string {
        return JSON.stringify(this.sections);
    }

    importTheme(themeData: string): void {
        try {
            const sections = JSON.parse(themeData);
            this.updateSections(sections);
        } catch (error) {
            throw new Error('Invalid theme data');
        }
    }
}


export const syncManager = new SyncManager();
