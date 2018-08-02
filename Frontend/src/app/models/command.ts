import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Etat } from '../models/etat';

export class Command {
  constructor(
    public indexCom: string,
    public client: User,
    public cart: Cart,
    public etat: Etat,
    public dateCommande: Date,
    public dateLivraison: Date
  ){}
}
