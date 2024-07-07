function LoadCSS(url, elemId)
{
    fetch(chrome.runtime.getURL(url))
        .then(response => response.text())
        .then(data => {
            let style = document.createElement('style');
            style.id = elemId;
            style.textContent = data;
            document.head.appendChild(style);
        });
}

function LoadTheme()
{
    chrome.storage.local.get('themeStyle', (result) => {
        let themeStyle = result.themeStyle;
        if (themeStyle === 'custom')
        {
            LoadCSS('css/kakaostory.custom.css', 'kakaostory-theme');
        }
    });
}