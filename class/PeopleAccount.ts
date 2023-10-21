import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  depositWithBonus = (amount: number): void => {
    if (amount > 0 && this.status) {
      this.balance += amount + 10;
      console.log(`Você depositou ${amount}, com bônus de 10. Total: ${amount + 10}`);
    } else {
      console.log('Conta inválida ou valor de depósito inválido.');
    }
  }
}
