import { vfrMocks, vfr } from 'clearbit-jsr-mocks';
import faker from 'faker';

export default vfr(
	new vfrMocks({
		getAccounts: {
			method: () => {
				let numResults = Math.floor(Math.random() * 10);
				let accounts = [];

				for (let i = 0; i <= numResults; i++) {
					accounts.push(createNewAccount(i));
				}

				return accounts;
			}
		},
		insertAccount: {
			method: ([methodName, account]) => {
				return Object.assign(
					{},
					{ Id: Math.floor(Math.random() * 100) },
					account
				);
			}
		},
		updateAccount: {
			method: ([methodName, account]) => {
				return account;
			}
		},
		deleteAccount: {
			method: ([methodName, accountId]) => {
				return accountId;
			}
		}
	})
);

function createNewAccount(id) {
	return {
		Id: id,
		Name: faker.company.companyName()
	};
}
