import React from 'react';
import mocks from '../mocks.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			accounts: []
		};
	}

	componentDidMount() {
		mocks({ method: 'getAccounts', args: [] }).then(result => {
			this.setState({
				accounts: result
			});
		});
	}

	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.state.accounts.map(account => {
							return (
								<tr key={account.Id}>
									<td>TEST2 {account.Id}</td>
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
