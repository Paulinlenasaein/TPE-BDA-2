import { Product } from '../models/product';

export interface Promotion {
  produit: Product,
  prixPromo: number,
  descriptPromo: string,
  dureePromo: number,
  dateDebut: Date,
  dateFin: Date,
  state: number
}
