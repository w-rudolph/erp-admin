import { UserModel, Sex } from "@/models/user.model";

export function apiGetUsers(): UserModel[] {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    ret.push(
      new UserModel(
        `test${i + 1}`,
        `email${i + 1}@com`,
        i < 5 ? Sex.male : Sex.female
      )
    );
  }
  return ret;
}
