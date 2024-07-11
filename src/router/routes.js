import {pagesRoutes} from "@/router/pages";
import {errorPageRoutes} from "@/router/errorPages";
import {guestRoutes} from "@/router/guest";
import {adminRoutes} from "@/router/admin";

// appRoutes = appRoutes.concat(pagesRoutes, errorPageRoutes);
let appRoutes = [];
appRoutes.push(...adminRoutes);
appRoutes.push(...pagesRoutes);
appRoutes.push(...errorPageRoutes);
appRoutes.push(...guestRoutes);

export default appRoutes;