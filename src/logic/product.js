import auth from './auth.js';
const ENDPOINT_PATH = "http://localhost:5001/api/v1";

export default {
	async findAll() {
		const userLogged = auth.getUserLogged();
		const params = new URLSearchParams({ token: userLogged.token });
		const url = `${ENDPOINT_PATH}/products?${params.toString()}`;

		const response = await fetch(url);
		if(!response.ok) {
			throw (await response.json());
		}

		const data = await response.json();
		return data;
	},
	async insert(product) {
		const userLogged = auth.getUserLogged();

		const url = `${ENDPOINT_PATH}/product`;
		const params = new URLSearchParams({
			...product,
			token: userLogged.token
		});

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
	}
}