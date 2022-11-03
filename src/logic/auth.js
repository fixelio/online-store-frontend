import { useUserLogged } from '@/composables/userLogged';

const ENDPOINT_PATH = "http://localhost:5001/api/v1/auth";

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
	async login(user) {
		const url = `${ENDPOINT_PATH}/login`;
		const params = new URLSearchParams(user);
		const options = {
			method: 'POST',
			body: params,
		};

		const response = await fetch(url, options);
		if(!response.ok) {
			throw (await response.json());
		}

		const data = await response.json();
		return data;
	},
	async register(user) {
		const url = `${ENDPOINT_PATH}/signup`;
		const params = new URLSearchParams(user);
		const options = {
			method: 'POST',
			body: params,
		}

		const response = await fetch(url, options);
		if(!response.ok) {
			throw (await response.json());
		}

		const data = await response.json();
		return data;
	},
}