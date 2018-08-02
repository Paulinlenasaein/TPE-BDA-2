import { User } from '../models/user';

export class Cart {
  constructor(
    public indexPan: string,
    public soldeTotal: number,
    public client: User,
    public dateJour: Date,
    public ack: number
  ){}
}
