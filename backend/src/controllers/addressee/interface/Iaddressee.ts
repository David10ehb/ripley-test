import { Document } from "mongoose";

export interface Iaddressee extends Document{
  name: String,
  rut: String,
  mail: String,
  phone: String,
  bank_receiving: [],
}

export interface InterfaceAddressee {
  name: String,
  rut: String,
  mail: String,
  phone: String,
  bank_receiving: [{
    bankId: String,
    bankName: String,
    accountsType: String,
    accountsNumber: Number,
  }],
}