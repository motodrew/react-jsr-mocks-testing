import mocks from '../mocks';

export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

function getAccounts(accounts) {
	return {
		type: GET_ACCOUNTS,
		accounts
	};
}

function addAccount(account) {
	return {
		type: ADD_ACCOUNT,
		account
	};
}

function updateAccount(account) {
	return {
		type: UPDATE_ACCOUNT,
		account
	};
}

function deleteAccount(accountId) {
	return {
		type: DELETE_ACCOUNT,
		accountId
	};
}

export function handleGetAccounts() {
	return dispatch => {
		return mocks({ method: 'getAccounts', args: [] }).then(accounts => {
			dispatch(getAccounts(accounts));
		});
	};
}

export function handleAddAccount(account, callback) {
	return dispatch => {
		return mocks({ method: 'insertAccount', args: [account, 'test'] })
			.then(result => {
				console.log(result);
				dispatch(addAccount(result));
				callback();
			})
			.catch(() => alert('There was an error inserting your record'));
	};
}

export function handleUpdateAccount(account) {
	return dispatch => {
		return mocks({ method: 'updateAccount', args: [account] })
			.then(result => {
				dispatch(updateAccount(result));
			})
			.catch(() => alert('There was an error updating your record'));
	};
}

export function handleDeleteAccount(accountId) {
	return dispatch => {
		return mocks({ method: 'deleteAccount', args: [accountId] })
			.then(account => {
				dispatch(deleteAccount(accountId));
				callback();
			})
			.catch(() => alert('There was an error deleting your record'));
	};
}
