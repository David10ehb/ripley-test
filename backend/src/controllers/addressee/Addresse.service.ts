import { createAddresseeRepository, findAddresseeRepository, getAddresseeByRutRepository } from "./Addresse.repository";
import { addresseeDto } from "./Dto/Addressee.Dto";

export const createAddresseeService = async (addresseeDto: addresseeDto) => {
  try {
    const getRut = await getAddresseeByRutRepository(addresseeDto);
    if (getRut.status === 400) {
      const data = await createAddresseeRepository(addresseeDto);
      if (data) {
        return { status: 200, message: 'Addressee creating' };
      }
    }
    return { status: 200, message: 'Existing Addressee' };
  } catch (error) {
    return error;
  }
}

export const findAddresseeService = async () => {
  try {
    const getAddresse = await findAddresseeRepository();
    if (getAddresse) {
      return { status: 200, data: JSON.parse(getAddresse) };
    }
  } catch (error) {
    return error;
  }
}