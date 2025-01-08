import type { Section } from "$lib/types/section";

class SectionState {
  private section: Section | null = $state(null);
  private error: Error | null = $state(null);

  getSection() {
    return this.section;
  }

  setSection(section: Section) {
    if(!this.isSameSection(section))
      this.section = section;
  }

  clearSection() {
    this.section = null;
  }

  getError() {
    return this.error;
  }

  setError(error: Error) {
    this.error = error;
  }

  clearError() {
    this.error = null;
  }

  private isSameSection(section: Section) {
    return this.section?.id === section.id;
  }
}

export const sectionProps = new SectionState();