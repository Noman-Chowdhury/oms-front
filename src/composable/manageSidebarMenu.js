import {layoutPosition} from "@/composable/navPositionSetting";

export const sidebarDropdownManage = (() => {
    const sidebarDropdownMenus = document.querySelectorAll('.sidebar-dropdown-menu.collapse.show');
    if (layoutPosition.value !== 'horizontal' || props.isCollapsed) {
        sidebarDropdownMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }
})