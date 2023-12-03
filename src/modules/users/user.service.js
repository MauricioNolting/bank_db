import { User } from './user.model.js';

export class UserService {
  static async create(data) {
    return await User.create(data);
  }

  static async login(data) {
    return await User.findOne({
      where: {
        status: true,
        accountNumber: data.accountNumber,
        password: data.password,
      },
    });
  }

  static async findOne(accountNumber) {
    return await User.findOne({
      where: {
        accountNumber,
        status: true,
      },
    });
  }
}
