export {ListingUsers} from './dev/views/listing-users';
export {MyElement} from './my-element';
export {CustomButton} from './dev/components/custom-button';
export {ListingPagination} from './dev/components/listing-pagination';
export {ListingHeader} from './dev/components/listing-header';
export {CustomSearch} from './dev/components/custom-search';
export {CreateAndEditUser} from './dev/views/create-user';
export {MyApp} from './dev/my-app';
export {Link} from './dev/components/app-link';
import {Router} from '@vaadin/router';
import {views} from './dev/router/index';

export const router = new Router(document.querySelector('#outlet'));

router.setRoutes(views);