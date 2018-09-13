import { vfrMocks, vfr } from 'clearbit-jsr-mocks';
import faker from 'faker';

export default vfr(
	new vfrMocks({
		getAccounts: {
			method: () => {
				let numResults = Math.floor(Math.random() * 10);
				let accounts = [];

				for (let i = 0; i <= numResults; i++) {
					accounts.push({
						Id: i,
						Name: faker.company.companyName()
					});
				}

				return accounts;
			}
		}
	})
);
