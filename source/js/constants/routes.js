import { CATEGORIES, PUBLICPATH } from './sitesettings';

const categoryRoutesCodes = {};
CATEGORIES.forEach(cat => categoryRoutesCodes[cat.slug.toUpperCase()] = `${ PUBLICPATH }${ cat.path }`);
export { categoryRoutesCodes };


export const routeCodes = {
  ARTICLE: `${ PUBLICPATH }:category/:id`,
};
