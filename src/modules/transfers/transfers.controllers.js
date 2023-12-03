import { UserService } from '../users/user.service.js';
import { TransferService } from './transfers.service.js';

export const makeTransfer = async (req, res) => {
  try {
    const { receiverAcountNumber, senderAccountNumber, amount } = req.body;

    const receiverAccountPromise = UserService.findOne(receiverAcountNumber);
    const senderAccountPromise = UserService.findOne(senderAccountNumber);

    const [receiverAccount, senderAccount] = await Promise.all([
      receiverAccountPromise,
      senderAccountPromise,
    ]);

    if (!receiverAccount) {
      return res.status(400).json({
        status: 'error porque el que recibe no existe',
      });
    }

    if (!senderAccount) {
      return res.status(400).json({
        status: 'error porque el que envia no existe',
      });
    }

    if (senderAccount.amount < amount) {
      return res.status(400).json({
        message: 'Sender userId amount insuficient',
      });
    }

    receiverAccount.amount += amount;
    senderAccount.amount -= amount;

    await receiverAccount.save();
    await senderAccount.save();

    return res.status(200).json({
      message: 'You are transfered with exito',
      receiverId: receiverAccount.dataValues,
      senderId: senderAccount.dataValues,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
