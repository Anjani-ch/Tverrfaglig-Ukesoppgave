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