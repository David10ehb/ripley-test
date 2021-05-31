import { Document } from "mongoose";

export interface Itransfers extends Document {
    addresseeId: String,
    amount: String,
}

export interface ITransferAddressee {
    addresseeId: String,
    name: String,
    rut: String,
    bankName: String,
    accountsType: String,
    amount: String,
}