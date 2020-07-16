import * as http from './http';

/******************      AUTH        ***********************/

export const loginUser = payload => {
	return http.post('auth/local', null, payload);
};

export const registerUser = payload => {
	return http.post('auth/local/register', null, payload);
};

export const forgotPassword = payload => {
	return http.post('auth/forgot-password', null, payload);
};

export const resetPassword = payload => {
	return http.post('auth/reset-password', null, payload);
};

