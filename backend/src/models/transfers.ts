import {Schema, model} from 'mongoose';
import { Itransfers } from '../controllers/transfers/interface/Itransfers';

const transferSchema = new Schema({
  addresseeId: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
});

export default model<Itransfers>('transfers', transferSchema);