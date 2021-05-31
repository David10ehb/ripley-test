import account from "../../models/account";
import { AccountDto } from "./Dto/Account.Dto";

export const createAccountRepository = async (data: AccountDto) => {
  try {
    const { name } = data;
    const accounting = new account({
      name
    });
    accounting.save();
    return accounting;
  } catch (error) {
    return error;
  }
};


export const  findAccountRepository = async () => {
try {
const accounting = await account.find({}).exec();
if (accounting) {
  return { status: 200, data: accounting };
}
return { status: 400, message: 'Account not found' };
} catch (error) {
return error;
}
};