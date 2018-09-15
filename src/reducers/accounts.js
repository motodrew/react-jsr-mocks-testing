import {
	GET_ACCOUNTS,
	ADD_ACCOUNT,
	UPDATE_ACCOUNT,
	DELETE_ACCOUNT
} from '../actions/accounts';

export default function accounts(state = [], action) {
	switch (action.type) {
		case GET_ACCOUNTS:
			return action.accounts;
		case ADD_ACCOUNT:
			return state.concat(action.account);
		case UPDATE_ACCOUNT:
			return state.map(
				account =>
					account.Id !== action.account.Id
						? account
						: Object.assign({}, action.account)
			);
		case DELETE_ACCOUNT:
			return state.filter(account => account.Id !== action.accountId);
		default:
			return state;
	}
}
