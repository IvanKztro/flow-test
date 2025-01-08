
class ProfileTab {
    private static instance: ProfileTab;

    currentTab = $state('profile');

    /**
    * Gets the singleton instance of ProfileTab
    * @returns {ProfileTab} The ProfileTab instance
    */
    static getInstance(): ProfileTab {
        if (!ProfileTab.instance) {
            ProfileTab.instance = new ProfileTab();
        }
        return ProfileTab.instance;
    }

    changeTab(tab: string) {
        this.currentTab = tab;
    }
}

export const profileTab = ProfileTab.getInstance();