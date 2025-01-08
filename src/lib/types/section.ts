import type { Component } from "svelte";

export interface Section {
    id: string;
    type: string;
    settings: Record<string, any>;
    blocks?: Block[];
}

export interface Block {
    id: string;
    type: string;
    settings: Record<string, any>;
}

export interface BlockDefinition {
    type: string;
    name: string;
    limit?: number;
    settings: SettingDefinition[];
}

export interface SectionDefinition {
    name: string;
    type: string;
    component: Component
    settings: SettingDefinition[];
    blocks?: BlockDefinition[];
    presets?: SectionPreset[];
    limit?: number;
    templates?: string[]; // which templates this section can be added to
}

export interface SectionPreset {
    name: string;
    settings: Record<string, any>;
    blocks?: Array<{
        type: string;
        settings: Record<string, any>;
    }>;
}

export interface SettingDefinition {
    type: 'text' | 'textarea' | 'image' | 'color' | 'select' | 'checkbox' | 'range' | 'richtext';
    id: string;
    label: string;
    default?: any;
    options?: { label: string; value: string }[];
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    placeholder?: string;
    info?: string;
}

