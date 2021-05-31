import transfers from "../../models/transfers";
import { transfersDto } from "./Dto/transfers.Dto";

export const createTransfersRepository = async (data: transfersDto) => {
  try {
    const { addresseeId, amount } = data;
    const Transfer = new transfers({
      addresseeId,
      amount
    });
    Transfer.save();
    return Transfer;
  } catch (error) {
    return error;
  }
}

export const findTransfersRepository = async () => {
  try {
    const Transfers = await transfers.find({});
    if (Transfers) {
      return JSON.stringify(Transfers);
    }
    return { status: 400, message: 'Transfers not found' };
  } catch (error) {
    return error;
  }
}