// SPA Bridge - handles iframe embedding for the SPA shell
// This script should be loaded on every page before other scripts.

(function() {
    const isEmbedded = window.self !== window.top || new URLSearchParams(window.location.search).has('embed');

    if (!isEmbedded) return;

    // Mark document as embedded
    document.documentElement.classList.add('embedded');

    // Intercept navigation clicks to route through the parent SPA shell
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a.nav-link');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href && window.parent !== window) {
                window.parent.postMessage({ type: 'spa-navigate', page: href }, '*');
            }
        }
    }, true);
})();
