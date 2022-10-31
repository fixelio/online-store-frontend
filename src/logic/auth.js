import axios from 'axios';
import { useUserLogged } from '@/composables/userLogged';

const ENDPOINT_PATH = "http://192.168.250.4:5001/api";

export default {
	setUserLogged(user) {
		window.localStorage.setItem('userLogged', JSON.stringify(user));

		const { setUserLogged } = useUserLogged();
		setUserLogged();
	},
	getUserLogged() {
		return JSON.parse(window.localStorage.getItem('userLogged'));
	},
	deleteUserLogged() {
		window.localStorage.removeItem('userLogged');

		const { removeUserLogged } = useUserLogged();
		removeUserLogged();
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