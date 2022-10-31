import { ref } from 'vue';

const userLogged = ref(false);

export const useUserLogged = () => {
	const setUserLogged = () => userLogged.value = true;
	const removeUserLogged = () => userLogged.value = false;

	return {
		userLogged,
		setUserLogged,
		removeUserLogged
	};
};