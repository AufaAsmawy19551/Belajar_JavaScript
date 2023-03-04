import { name, sum, Company } from './Module1.mjs';
import { name as nama, sum as total, Company as Perusahaan } from './Module1.mjs';

console.log(name);
console.log(nama);

console.log(sum(5, 5));
console.log(total(5, 5));

const a = new Company();
const b = new Perusahaan();
