window.addEventListener('DOMContentLoaded', e => {
    // Get sidenav element
    const sidenav = document.querySelector('.sidenav');

    // Initialize sidenav logic from materialize
    M.Sidenav.init(sidenav);
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