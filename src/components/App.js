import React from 'react';
import { connect } from 'react-redux';

import Accounts from './Accounts';

import { handleGetAccounts } from '../actions/accounts';

class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;

		dispatch(handleGetAccounts());
	}

	render() {
		return (
			<div>
				<Accounts />
			</div>
		);
	}
}

export default connect(state => ({}))(App);
