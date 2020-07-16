import {configureStore} from '@reduxjs/toolkit';
import user from './user';
import toast from './toast';

export default configureStore({
	reducer: {
		user,
		toast,
	},
});
