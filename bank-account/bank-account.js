//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
  }

  open() {
    if(this.isOpen) throw new ValueError();
    this._balance = 0;
    this.isOpen = true;
  }

  close() {
    if(this.isOpen)
        return this.isOpen = false;
    throw new ValueError(); 
  }

  deposit(value) {
    if(!this.isOpen)
        throw new ValueError(); 
    if(value <=0) throw new ValueError();
    this._balance+=value;
  }

  withdraw(value) {
    if(value <=0 || this._balance< value) throw new ValueError();
    this._balance-=value;
  }
  get balance() {
    if(this.isOpen)
        return this._balance;
    throw new ValueError(); 
 
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
