export default class RestoServise {
	_ApiBase = 'http://localhost:3000';

	getResource = async (url) => {
		const res = await fetch(url);
		//обработка ошибок
		if (!res.ok) {
			throw new Error(` Произошла ошибака - ${res.status}, в файле: ${url} `);
		}
		return res.json();
	}

	getMenuItems = async () => {
		const menu = await this.getResource(`${this._ApiBase}/menu/`);
		return menu;
	}
}