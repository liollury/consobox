export interface Conso {
  date: number;
  volume: number;
  mileage: number;
  full: boolean;
  price: number;
}


export interface ConsoImport {
  voiture: number;
  date: string;
  volume: number;
  partiel: string;
  prix: number;
  km: number;
  idCloud: number;
}
