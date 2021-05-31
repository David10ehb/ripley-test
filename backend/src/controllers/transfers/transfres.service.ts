import { findAddresseeRepository } from "../addressee/Addresse.repository";
import { transfersDto } from "./Dto/transfers.Dto";
import { ITransferAddressee } from "./interface/Itransfers";
import { createTransfersRepository, findTransfersRepository } from "./transfers.repository";

export const createTransferService = async (data: transfersDto) => {
  try {
    const result = await createTransfersRepository(data);
    if (result) {
      return { status: 200, message: 'successful transfer' };
    }
  } catch (error) {
    return error;
  }
}

export const findTransferService = async () => {
  try {
    let transfAddresse: ITransferAddressee[] = [];
    const titles: any[] = ['Nombre', 'Rut', 'Banco', 'Cuemta', 'Monto'];
    const getAddresse = await findAddresseeRepository();
    if (getAddresse) {
      const getTransfer = await findTransfersRepository();
      if (getTransfer) {
        const addre = JSON.parse(getAddresse);
        const transf = JSON.parse(getTransfer);
        transf.forEach((T: any) => {
          const data = addre.filter((A: any) => A._id === T.addresseeId);
          transfAddresse.push({
            addresseeId: data[0]._id,
            name: data[0].name,
            rut: data[0].rut,
            bankName: data[0].bank_receiving.bankName,
            accountsType: data[0].bank_receiving.accounts.type,
            amount: T.amount,
          });
        });
        return { data: {titles, transfAddresse} };
      }
    }
  } catch (error) {
    return error;
  }
}