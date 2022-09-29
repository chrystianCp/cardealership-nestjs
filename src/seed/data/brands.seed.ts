import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'nissan',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'ferrari',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'porsche',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'mercedes-amg',
    createdAt: new Date().getTime(),
  },
];
