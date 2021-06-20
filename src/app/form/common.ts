import * as CONST from './const-validation';

export class AdminAuthValidation {
    private _username: any = CONST.username;
    private _password: any = CONST.password;
  
    public get username(): any {
      return Object.assign({}, this._username);
    }
  
    public get password(): any {
      return Object.assign({}, this._password);
    }
  }

export class orderFormValidation {
  private _Id: any = CONST.orderId;
  private _dueDate: any = CONST.dueDate;
  private _name: any = CONST.name;
  private _address: any = CONST.address;
  private _contactNumber: any = CONST.contactNumber;
  private _amount: any = CONST.amount;

  public get Id(): any {
    return Object.assign({}, this._Id);
  }
  public get dueDate(): any {
    return Object.assign({}, this._dueDate);
  }
  public get name(): any {
    return Object.assign({}, this._name);
  }
  public get address(): any {
    return Object.assign({}, this._address);
  }
  public get contactNumber(): any {
    return Object.assign({}, this._contactNumber);
  }
  public get amount(): any {
    return Object.assign({}, this._amount);
  }
}