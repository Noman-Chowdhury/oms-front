import {pagesRoutes} from "@/router/pages";
import {errorPageRoutes} from "@/router/errorPages";
import {guestRoutes} from "@/router/guest";

// appRoutes = appRoutes.concat(pagesRoutes, errorPageRoutes);
let appRoutes = [];
appRoutes.push(...pagesRoutes);
appRoutes.push(...errorPageRoutes);
appRoutes.push(...guestRoutes);

export default appRoutes;