import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: uuid(),
    brand: 'nissan',
    model: 'gtr',
  },
  {
    id: uuid(),
    brand: 'ferrari',
    model: 'f40',
  },
  {
    id: uuid(),
    brand: 'porsche',
    model: '911',
  },
  {
    id: uuid(),
    brand: 'mercedes-amg',
    model: 'gt',
  },
];
