function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(contentId) {
    const contentDiv = document.getElementById('dynamic-content');
    if (contentId.endsWith('.mp4')) {
        contentDiv.innerHTML = `
            <h2>Video</h2>
            <video controls width="600">
                <source src="${contentId}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        contentDiv.innerHTML = `
            <h2>Presentation</h2>
            <iframe src="https://docs.google.com/presentation/d/${contentId}/embed" width="600" height="400"></iframe>
        `;
    }
}
