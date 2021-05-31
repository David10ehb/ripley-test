import { Router, Request, Response } from 'express';
import { createTransferService, findTransferService } from "./transfres.service";

const transfersControllers = Router();


transfersControllers.post('/transfers/create', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result =  await createTransferService(data);
    res.status(201).send(result);
    return result;
  } catch (error) {
    return error;
  }
});

transfersControllers.get('/transfers/find', async (req: Request, res: Response) => {
  try {
    const result = await findTransferService();
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(404).send('transfers not found');
    }
    return result;
  } catch (error) {
    return error;
  }
});

export default transfersControllers;