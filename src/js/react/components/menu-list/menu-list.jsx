import React, { Component } from 'react';
import MenuListItem from '../menu-list-item/menu-list-item.jsx';
import WithRestoService from '../hoc/with-resto-service.jsx';
import { connect } from 'react-redux';
import { menuLoaded, menuRequested, addedToCard } from '../../actions/actions.js';
import Spinner from '../spinner/spinner.jsx';
import './menu-list.scss';

class MenuList extends Component {

	componentDidMount() {
		this.props.menuRequested();

		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(res => this.props.menuLoaded(res))
			.catch();
	}
	render() {
		const { menuItems, loading, addedToCard } = this.props;
		if (loading) {
			return <Spinner />;
		}
		return (
			<ul className="menu__list">
				{
					menuItems.map(
						(menuItem) => {
							return <MenuListItem
								key={menuItem.id}
								menuItem={menuItem}
								onAddToCard={() => addedToCard(menuItem.id)}
							/>
						}
					)
				}
			</ul>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
	}
}

const mapDispatchToProps = {
	menuLoaded,
	menuRequested,
	// menuError,
	addedToCard,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));