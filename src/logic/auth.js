import axios from 'axios';
//import Cookies from 'js-cookie';

const ENDPOINT_PATH = "http://127.0.0.1:5001/api";

export default {
	setUserLogged(user) {
		window.localStorage.setItem('userLogged', JSON.stringify(user));
	},
	getUserLogged() {
		return JSON.parse(window.localStorage.getItem('userLogged'));
	},
	deleteUserLogged() {
		window.localStorage.removeItem('userLogged');
	},
	login(email, password) {
		const user = { email, password };

		return axios.post(`${ENDPOINT_PATH}/auth/login`, user);
	},
	register(email, password) {
		const user = { email, password };

		return axios.post(ENDPOINT_PATH + "/auth/register", user);
	},
}