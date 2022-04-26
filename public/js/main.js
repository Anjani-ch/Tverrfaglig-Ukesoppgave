window.addEventListener('DOMContentLoaded', e => {
    // Get mobile sidenav element
    const sidenavs = document.querySelectorAll('.sidenav');
    // Get collapsible elements
    const collapsibles = document.querySelectorAll('.collapsible');

    // Initialize mobile sidenav logic from materialize
    M.Sidenav.init(sidenavs);

    // Initialize collapsible logic from materialize
    M.Collapsible.init(collapsibles);
});

window.addEventListener('click', e => {
    // Check if clicked element is logout button
    if (e.target.classList.contains('logout-btn')) {
        // Get body element
        const body = document.querySelector('body');
        // Create temporary form for logout
        const logoutForm = document.createElement('FORM');

        // Fill form attributes for request
        logoutForm.setAttribute('action', '/logout');
        logoutForm.setAttribute('method', 'POST');

        // Connect form to website
        body.appendChild(logoutForm);

        // Submit request
        logoutForm.submit();
    }
    
    // Check if clicked element is close alert button
    if(e.target.classList.contains('close-alert')) {
        // Get parent alert element
        const parentAlertEl = e.target.parentElement.parentElement;

        // Remove alert element
        parentAlertEl.remove();
    }
});