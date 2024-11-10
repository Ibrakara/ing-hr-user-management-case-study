export {ListingUsers} from './dev/views/listing-users';
export {MyElement} from './my-element';
export {CustomButton} from './dev/components/custom-button';
export {ListingPagination} from './dev/components/listing-pagination';
export {GlobalHeader} from './dev/components/global-header';
export {CustomSearch} from './dev/components/custom-search';
export {CreateAndEditUser} from './dev/views/create-user';
export {MyApp} from './dev/my-app';
export {CustomInput} from './dev/components/custom-input';
export {CustomDropdown} from './dev/components/custom-dropdown';
import './dev/router';
// add this to fix process undefined error
window.process = {
  env: {
    NODE_ENV: 'development',
  },
};
