import { TypeProduit } from '../models/type-produit';

export class Product {
  constructor(
    public id: number,
    public nomProd: string,
    public description: string,
    public type: TypeProduit,
    public prixUnit: number,
    public image: string,
    public size: number,
    public state: number
  ){}
}
