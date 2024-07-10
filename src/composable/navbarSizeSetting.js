import { ref } from 'vue';

export const hoverableMenu = ref(false)
export const currentNavbarSize = ref('default')

export const handleNavbarSize = (() => {
    currentNavbarSize.value = 'default'
    hoverableMenu.value = false
    document.documentElement.setAttribute('data-nav-size', 'nav-default');
    if(document.documentElement.getAttribute('data-nav-size') === 'nav-default') {
        document.querySelector('.nav-close-btn').style.display = 'block';
        if (window.innerWidth > 1199) {
            if (document.body.contains(document.querySelector('.main-sidebar'))) {
                document.querySelector('.header').classList.remove('expanded');
                // document.querySelector('.header .logo').classList.remove('small');
                document.querySelector('.main-sidebar').classList.remove('collapsed', 'sidebar-hover', 'hoverable');
                document.querySelector('.body-padding').classList.remove('expanded', 'hover-menu');
                document.querySelector('.sidebar-link-group').style.display = 'block';
            }
        } else {
            if (document.body.contains(document.querySelector('.main-sidebar'))) {
                document.querySelector('.header').classList.remove('has-sidebar');
                document.querySelector('.main-sidebar').classList.remove('sidebar-mini');
                document.querySelector('.main-sidebar').classList.remove('collapsed');
            }
        }
    }
    localStorage.removeItem("sidebarSmall");
    localStorage.removeItem("sidebarHover");
})

const enableSidebarSmall = () => {
    document.documentElement.setAttribute('data-nav-size', 'nav-small');
    if(document.documentElement.getAttribute('data-nav-size') === 'nav-small') {
        document.body.classList.remove('hover-menu');
        document.querySelector('.main-sidebar').classList.remove('sidebar-hover', 'hoverable');
        document.querySelector('.nav-close-btn').style.display = 'block';
        if (window.innerWidth > 1199) {
            if (document.body.contains(document.querySelector('.main-sidebar'))) {
                document.querySelector('.header').classList.add('expanded');
                // document.querySelector('.header .logo').classList.add('small');
                document.querySelector('.main-sidebar').classList.add('collapsed');
                document.querySelector('.body-padding').classList.add('expanded');
                document.querySelector('.sidebar-link-group').style.display = 'block';
            }
        } else {
            if (document.body.contains(document.querySelector('.main-sidebar'))) {
                document.querySelector('.header').classList.add('has-sidebar');
                document.querySelector('.main-sidebar').classList.remove('sidebar-mini');
                document.querySelector('.main-sidebar').classList.remove('collapsed');
            }
        }
    }
    localStorage.setItem("sidebarSmall", "enabled");
    localStorage.removeItem("sidebarHover");
};

export const sidebarSmallClick = (e) => {
    currentNavbarSize.value = 'small'
    e.preventDefault();
    e.stopPropagation();
    enableSidebarSmall();
    hoverableMenu.value = false
};

const enableSidebarHover = () => {
    document.documentElement.setAttribute('data-nav-size', 'nav-hover');
    if(document.documentElement.getAttribute('data-nav-size') === 'nav-hover') {
        document.querySelector('.nav-close-btn').style.display = 'none';
        document.querySelector('.header').classList.add('expanded');
        document.querySelector('.sidebar-dropdown-menu').style.display = 'none';
    }
    localStorage.setItem("sidebarHover", "enabled");
    localStorage.removeItem("sidebarSmall");
    const body = document.body
    body.classList.add('hover-menu')
    hoverableMenu.value = true
};

export const sidebarHoverClick = () => {
    currentNavbarSize.value = 'expand'
    enableSidebarHover();
};

export const hoverableSidebar = (() => {
    const sidebarHover = localStorage.getItem("sidebarHover");
    if (sidebarHover) {
        hoverableMenu.value = false
        const body = document.body
        body.classList.remove('hover-menu')
    }
})

export const hoverableOutSidebar = (() => {
    const sidebarHover = localStorage.getItem("sidebarHover");
    if (sidebarHover) {
        hoverableMenu.value = true
        const body = document.body
        body.classList.add('hover-menu')

        const sidebarDropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu.collapse.show');
            sidebarDropdownMenus.forEach(menu => {
                menu.classList.remove('show');
            })
    }
})