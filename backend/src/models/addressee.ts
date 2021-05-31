import { model, Schema } from "mongoose";
import { Iaddressee } from "../controllers/addressee/interface/Iaddressee";

const addresseeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rut: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
  },
  bank_receiving:
    {
      type: Object,
    },
});

export default model<Iaddressee>('addressee', addresseeSchema);