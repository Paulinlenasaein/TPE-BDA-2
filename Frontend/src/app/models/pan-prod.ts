import { Cart } from '../models/cart';
import { Product } from '../models/product';

export class PanProd {
  constructor(
    public panier: Cart,
    public produit: Product,
    public nbreExempl: number,
    public prixTotal: number
  ){}

}
