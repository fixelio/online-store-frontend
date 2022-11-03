export const sellerMenu = [
	{
		header: 'Menú',
		hiddenOnCollapse: true
	},
	{
		href: '/',
		title: 'Dashboard',
		icon: 'bi bi-house'
	},
	{
		title: 'Productos',
		icon: 'bi bi-bag',
		child: [
			{
				href: '/product/register',
				title: 'Registrar'
			},
			{
				href: '/product/list',
				title: 'Mis Productos'
			}
		]
	},
	{
		href: '/logout',
		title: 'Cerrar Sesión',
		icon: 'bi bi-box-arrow-left',
	}
];

export const customerMenu = [
	{
		header: 'Menú',
		hiddenOnCollapse: true
	},
	{
		href: '/',
		title: 'Dashboard',
		icon: 'bi bi-house'
	},
	{
		href: '/product/list',
		title: 'Ver productos',
		icon: 'bi bi-bag',
	},
	{
		href: '/logout',
		title: 'Cerrar Sesión',
		icon: 'bi bi-box-arrow-left',
	}
];
