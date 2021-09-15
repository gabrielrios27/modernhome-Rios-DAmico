const productos = [
	{
		id: 1,
		nombre: 'Carrara',
		medida: '60x120',
		caja: 1.44,
		precio: 5000,
		imagen: 'pisos/carrara.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 2,
		nombre: 'Onix',
		medida: '60x60',
		caja: 1.44,
		precio: 4200,
		imagen: 'pisos/onix.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 3,
		nombre: 'Bauhaus',
		medida: '58x58',
		caja: 1.35,
		precio: 2800,
		imagen: 'pisos/bauhaus.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 4,
		nombre: 'Linen',
		medida: '60x60',
		caja: 1.44,
		precio: 2900,
		imagen: 'pisos/linen.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 5,
		nombre: 'Artec',
		medida: '60x60',
		caja: 1.44,
		precio: 2700,
		imagen: 'pisos/artec.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 6,
		nombre: 'Calacata',
		medida: '60x60',
		caja: 1.44,
		precio: 4300,
		imagen: 'pisos/calacata.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 7,
		nombre: 'Amur',
		medida: '60x60',
		caja: 1.44,
		precio: 3750,
		imagen: 'pisos/amur.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 8,
		nombre: 'Porfido',
		medida: '58x58',
		caja: 1.35,
		precio: 3200,
		imagen: 'pisos/porfido.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 9,
		nombre: 'Oxidum',
		medida: '60x60',
		caja: 1.44,
		precio: 4200,
		imagen: 'pisos/oxidum.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 10,
		nombre: 'Cleveland',
		medida: '23x120',
		caja: 1.12,
		precio: 4500,
		imagen: 'pisos/cleveland.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 11,
		nombre: 'Muse',
		medida: '50x100',
		caja: 1,
		precio: 4700,
		imagen: 'pisos/muse.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
	{
		id: 12,
		nombre: 'Vermont',
		medida: '15x90',
		caja: 0.95,
		precio: 4400,
		imagen: 'pisos/vermont.jpg',
		cantidad: 0,
		pegamento: false,
		pastina: false,
	},
];

export const getFetch = new Promise((resolve) => {
	setTimeout(() => {
		resolve(productos);
	}, 3000);
});
