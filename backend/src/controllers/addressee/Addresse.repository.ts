import addressee from "../../models/addressee";
import { addresseeDto } from "./Dto/Addressee.Dto";


export const createAddresseeRepository = async (data: addresseeDto):Promise<any> => {
  try {
    const {
      name,
      rut,
      mail,
      phone,
      bankId,
      bankName,
      accountType,
      accountNumber
    } = data;

    const Addressee = new addressee({
      name,
      rut,
      mail,
      phone,
      bank_receiving: {
        bankId,
        bankName,
        accounts: {
          type: accountType,
          number: accountNumber,
        },
      },
    });
    Addressee.save();
    return Addressee;
  } catch (error) {
    return error;
  }
};


export const getAddresseeByRutRepository = async (data: addresseeDto) => {
  try {
    const { rut } = data;
    const Addressee = await addressee.findOne({ rut }).exec();
    if (Addressee) {
      return { status: 200, data: Addressee };
    }
    return { status: 400, message: 'Addressee not found' };
  } catch (error) {
    return error;
  }
};

export const findAddresseeRepository = async () => {
  try {
    const Addressee = await addressee.find({});
    if (Addressee) {
      return JSON.stringify(Addressee);
    }
    return { status: 400, message: 'Addressee not found' };
  } catch (error) {
    return error;
  }
};