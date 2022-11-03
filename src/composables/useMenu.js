import { ref } from 'vue';

const menuType = ref('vendedor');

export const useMenu = () => {
	const setSellerMenu = () =>  menuType.value = 'vendedor';
	const setCustomerMenu = () => menuType.value = 'cliente';

	return {
		menuType,
		setSellerMenu,
		setCustomerMenu
	};
}