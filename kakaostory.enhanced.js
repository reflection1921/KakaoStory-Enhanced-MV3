function AttachEnhancedSettingsPage()
{
    fetch(chrome.runtime.getURL('html/enhanced_settings.html'))
        .then(response => response.text())
        .then(data => {
            let settings = document.createElement('div');
            settings.id = 'enhancedLayer';
            settings.className = 'cover _cover';
            settings.style.cssText = 'display: none;  overflow-y: scroll;';
            document.body.appendChild(settings);
            document.getElementById('enhancedLayer').innerHTML = data;
        });
}