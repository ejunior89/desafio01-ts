export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  protected status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (amount: number): void => {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Você depositou ${amount}`);
    } else {
      console.log('Valor de depósito inválido.');
    }
  }

  withdraw = (amount: number): void => {
    if (amount > 0 && this.status && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}`);
    } else {
      console.log('Conta inválida ou saldo insuficiente. Não é possível efetuar saque.');
    }
  }

  getBalance = (): void => {
    console.log(`Saldo: ${this.balance}`);
  }
}
