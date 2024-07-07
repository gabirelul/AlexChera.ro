document.addEventListener('DOMContentLoaded', function () {
    console.log("Script is running.");

    const showMenu = (headerToggle, navbarId) => {
        const toggleBtn = document.getElementById(headerToggle)
        const nav = document.getElementById(navbarId)


        if (headerToggle && navbarId) {
            toggleBtn.addEventListener('click', () => {
                nav.classList.toggle('show-menu')
                toggleBtn.classList.toggle("active")
            })
        }
    }

    showMenu('header-toggle', 'navbar')
});