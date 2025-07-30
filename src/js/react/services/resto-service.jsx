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

	// idConverter(itemMenu) {
	// 	itemMenu.id =
	// }
}
// {
// 	"title": "Cesar salad",
// 	"price": 12,
// 	"url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
// 	"category": "salads",
// 	"id": 1
// },