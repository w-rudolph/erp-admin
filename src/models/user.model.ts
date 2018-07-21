export enum Sex {
  unkown = -1,
  male = 0,
  female = 1
}

export class UserModel {
  name: string;
  email: string;
  sex: Sex;

  constructor(name: string, email: string, sex: Sex = Sex.unkown) {
    this.name = name;
    this.email = email;
    this.sex = sex;
  }
}
