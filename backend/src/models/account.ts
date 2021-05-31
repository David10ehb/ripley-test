import { model, Schema, Document } from "mongoose";

export interface Iaccount extends Document{
  name: String,
}

const accountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

export default model<Iaccount>('account', accountSchema);