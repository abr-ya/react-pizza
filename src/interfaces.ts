export interface IApp {
	showLoading: () => void;
	hideLoading: (data: boolean) => void;
	requestProductsSaga: () => void;
	setSort: (text: string) => void;
	setSize: (text: string) => void;
	addToCart: (id: number) => void;
	delFromCart: (id: number) => void;
	loading: boolean;
	products: any[];
	sort: string;
	size: string;
	cart: any;
}

export interface IHome {
	setSort: (text: string) => void;
	setSize: (text: string) => void;
	addToCart: (id: number) => void;
	delFromCart: (id: number) => void;
	products: any[];
	sort: string;
	size: string;
	cart: any;
}

export interface ISale {
	id: number;
	title: string;
	image: string;
	text: string;
}

export interface IProduct {
	id: number;
	title: string;
	image: string;
	description: string;
	category: string[];
	price: number;
	sku: string;
}

export interface IData {
	pizza: IProduct[];
	sales: ISale[];
}

export interface ISales {
	sales: ISale[];
}

export interface IProducts {
	data: IProduct[];
	handleAddToCart(id: number): void;
}

export interface IFilter {
	size: string;
	sort: string;
	handlers: {
		sortChange: (text: string) => void;
		sizeChange: (text: string) => void;
	};
	count: number;
}

export interface ICart {
	products: IProduct[];
	cartItems: any;
	handleRemoveFromCart(id: number): void;
}
