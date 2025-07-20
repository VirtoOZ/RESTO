import React, { Component } from 'react';
import MenuListItem from '../menu-list-item/menu-list-item.jsx';
import WithRestoService from '../hoc/with-resto-service.jsx';
import { connect } from 'react-redux';
import { menuLoaded, menuRequested, menuError } from '../../actions/index.js';
import Spinner from '../spinner/spinner.jsx';
import './menu-list.scss';

class MenuList extends Component {

	componentDidMount() {
		this.props.menuRequested();


		const { RestoService } = this.props;
		RestoService.getMenuItems()
			.then(res => this.props.menuLoaded(res))
			.catch(this.props.menuError());
	}
	render() {
		const { menuItems, loading } = this.props;
		if (loading) {
			return <Spinner />;
		}
		return (
			<ul className="menu__list">
				{
					menuItems.map(
						(manuItem) => <MenuListItem key={manuItem.id} menuItem={manuItem} />
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

const mapDispatchToProps = (dispatch) => {
	return {
		menuLoaded: (newMenu) => {
			dispatch(
				menuLoaded(newMenu)
			)
		},
		menuRequested,
		menuError,
	}
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));