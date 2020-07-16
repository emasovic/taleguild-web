import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

import * as api from '../lib/api';

import {USER_OP} from 'types/user';
import {HOME} from 'lib/routes';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: null,
		error: null,
		op: null,
		loading: false,
	},
	reducers: {
		gotData: (state, action) => {
			const {error, jwt, ...rest} = action.payload;
			state.data = {...rest, token: jwt};
			state.error = error;
			state.loading = null;
			state.op = null;
		},
		opStart: (state, action) => {
			state.op = action.payload || true;
		},
		opEnd: state => {
			state.op = null;
		},
		loadingStart: state => {
			state.loading = true;
		},
		loadingEnd: state => {
			state.loading = false;
		},
		logOut: state => {
			state.data = null;
		},
	},
});

export const {logOut, opStart, opEnd, gotData, loadingStart, loadingEnd} = userSlice.actions;

// export const loginUser = payload => async dispatch => {
// 	dispatch(opStart(USER_OP.login));
// 	const res = await api.loginUser(payload);
// 	if (res.error) {
// 		dispatch(opEnd());
// 		return dispatch(newToast({...Toast.error(res.error)}));
// 	}
// 	const {jwt, user} = res;
// 	const {saved_stories, ...rest} = user;

// 	localStorage.setItem('token', res.jwt);

// 	dispatch(gotData({jwt, ...rest}));
// };

export const registerUser = (payload, history) => async dispatch => {
	dispatch(opStart(USER_OP.registring));
	const res = await api.registerUser(payload);

	if (res.error) {
		dispatch(opEnd());
		if (Array.isArray(res.error)) {
			return toast.error(res.error[0].messages[0].message || 'Bad request');
		}
		return toast.error(res.error);
	}
	toast.success('Thank you for registring, check your email for confirmation link!');
	dispatch(opEnd());
	history.push(HOME);
};

export const selectUser = state => state.user;

export default userSlice.reducer;
