export default class RestoServise {
	constructor() {
		this._SrvBase = 'http://localhost:3000/menu';
	}

	getMenuItems = async (url) => {
		const res = await fetch(url);
		//обработка ошибок
		if (!res.ok) {
			throw new Error(` Произошла ошибака - ${res.status}, в файле: ${url} `);
		}
		return res.json();
	}

	getMenu = async () => {
		const menu = await this.getMenuItems(this._SrvBase);
		return menu;
	}
}