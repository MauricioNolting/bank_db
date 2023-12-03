import { Transfers } from './transfers.model.js';

export class TransferService {
  static async findOne(id) {
    return await Transfers.findOne({
      where: {
        id,
      },
    });
  }
}
