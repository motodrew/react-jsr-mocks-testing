import React from 'react';
import { connect } from 'react-redux';

import { handleAddAccount } from '../actions/accounts';

class Accounts extends React.Component {
	insertAccount = event => {
		event.preventDefault();

		let account = {
			Name: this.input.value
		};

		this.props.dispatch(
			handleAddAccount(account, () => (this.input.value = ''))
		);
	};

	updateAccount = () => {};

	deleteAccount = () => {};

	render() {
		const { accounts } = this.props;

		return (
			<div>
				<div className="insert-account">
					<input
						type="text"
						placeholder="New Account Name"
						ref={input => (this.input = input)}
					/>

					<button onClick={this.insertAccount}>Insert Account</button>
				</div>

				<table>
					<tbody>
						{accounts.map(account => {
							return (
								<tr key={account.Id}>
									<td>{account.Id}</td>
									<td>{account.Name}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default connect(state => ({
	accounts: state.accounts
}))(Accounts);
