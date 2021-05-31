import { Router, Request, Response } from 'express';
import { createAddresseeService, findAddresseeService } from "./Addresse.service";

const addresseeControllers = Router();

addresseeControllers.post('/addressee/create', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createAddresseeService(data);
    if (result) {
      res.status(201).send(result);
      return result;
    }
    return result;
  } catch (error) {
    return error;
  }
});

addresseeControllers.get('/addressee/find', async (req: Request, res: Response) => {
  try {
    const result = await findAddresseeService();
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(404).send('addressee not found');
    }
    return result;
  } catch (error) {
    return error;
  }
});

export default addresseeControllers;