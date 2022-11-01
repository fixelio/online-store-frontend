import { ref } from 'vue';

const isOnMobile = ref(false);

export const useIsOnMobile = () => {
	const setIsOnMobile = () => isOnMobile.value = true;
	const unsetIsOnMobile = () => isOnMobile.value = false;

	return {
		isOnMobile,
		setIsOnMobile,
		unsetIsOnMobile
	};
};