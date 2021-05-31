import { findAccountRepository, createAccountRepository } from "./Account.repository";
import { AccountDto } from "./Dto/Account.Dto";


export const createAccountService = async (data: AccountDto) => {
  try {
    const result = await createAccountRepository(data);
    if (result) {
      return result;
    }
    return 'not fount';
  } catch (error) {
    return error;
  }
}

export const findAccountService = async () => {
  try {
    const getAccount = await findAccountRepository();
    console.log('asdhjas: ', getAccount);
    if (getAccount.status === 200) {
       return getAccount;
    }
  } catch (error) {
    return error;
  }
}