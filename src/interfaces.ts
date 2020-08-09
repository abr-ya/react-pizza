export interface IApp {
	showLoading: () => void;
	hideLoading: (data: boolean) => void;
	requestProductsSaga: () => void;
	setSort: (text: string) => void;
	setSize: (text: string) => void;
	addToCart: (id: string) => void;
	delFromCart: (id: string) => void;
	loading: boolean;
	products: any[];
	sort: string;
	size: string;
	cart: any;
}

export interface IHome {
	setSort: (text: string) => void;
	setSize: (text: string) => void;
	addToCart: (id: string) => void;
	delFromCart: (id: string) => void;
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
	price2: {[key: string]: number};
	defaultSize: 'S' | 'M' | 'L';
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
	handleAddToCart(id: string): void;
}

export interface IPizza {
	data: IProduct;
	handleAddToCart(id: string): void;
}

export interface ISizeSetter {
	start: string;
	setter(size: 'S' | 'M' | 'L'): void;
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
	handleRemoveFromCart(id: string): void;
}
