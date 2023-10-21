import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (amount > 0 && this.status) {
      this.balance += amount;
      console.log(`Empréstimo aprovado. Você recebeu ${amount}`);
    } else {
      console.log('Conta inválida ou valor de empréstimo inválido.');
    }
  }
}
