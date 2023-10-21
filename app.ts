import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Guilherme', 10);
console.log(peopleAccount);
peopleAccount.deposit(300);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
console.log(companyAccount);
companyAccount.getLoan(1000);
