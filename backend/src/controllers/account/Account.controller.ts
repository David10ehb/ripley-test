import { Router, Request, Response } from 'express';
import { createAccountService, findAccountService } from "./Account.service";

const accountControllers = Router();

accountControllers.post('/account/create', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = createAccountService(data);
    return result;
  } catch (error) {
    return error;
  }
});

accountControllers.get('/account/find/', async (req: Request, res: Response) => {
  try {
    const result = await findAccountService();
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(404).send('account not found');
    }
    return result;
  } catch (error) {
    return error;
  }
});

export default accountControllers;