import { Transfers } from './transfers.model.js';

export class TransferService {
  static async create(data) {
    return await Transfers.create(data);
  }

  static async findAll(id) {
    return await Transfers.findAll({
      where: {
        senderUserId: id,
      },
    });
  }
}
