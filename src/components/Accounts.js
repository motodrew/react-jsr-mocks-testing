import React from 'react';
import { connect } from 'react-redux';

import {
	handleAddAccount,
	handleDeleteAccount,
	handleUpdateAccount
} from '../actions/accounts';

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

	handleChange = e => {
		let Id = e.target.id;
		let Name = e.target.value;

		let account = {
			Id,
			Name
		};

		this.updateAccount(account);
	};

	updateAccount = account => {
		this.props.dispatch(handleUpdateAccount(account));
	};

	deleteAccount = account => {
		this.props.dispatch(handleDeleteAccount(account));
	};

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
									<td>
										<input
											type="text"
											defaultValue={account.Name}
											id={account.Id}
											onBlur={this.handleChange}
										/>
									</td>
									<td>
										<button
											type="button"
											onClick={() => this.deleteAccount(account)}>
											X
										</button>
									</td>
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
