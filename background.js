chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ themeStyle: 'custom' }, () => {
        console.log("Theme is set to 'custom'");
    });
});