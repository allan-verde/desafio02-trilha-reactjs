import expresso from '../assets/coffes/expresso.png';
import americano from '../assets/coffes/americano.png';
import arabe from '../assets/coffes/arabe.png';
import cafeComLeite from '../assets/coffes/cafe-com-leite.png';
import capuccino from '../assets/coffes/capuccino.png';
import chocolateQuente from '../assets/coffes/chocolate-quente.png';
import cubano from '../assets/coffes/cubano.png';
import expressoCremoso from '../assets/coffes/expresso-cremoso.png';
import havaiano from '../assets/coffes/havaiano.png';
import irlandes from '../assets/coffes/irlandes.png';
import latte from '../assets/coffes/latte.png';
import macchiato from '../assets/coffes/macchiato.png';
import mocaccino from '../assets/coffes/mocaccino.png';

export const coffeeList = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expresso,
    price: 9.9,
    tags: ['tradicional']
  }, {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    price: 8.45,
    tags: ['tradicional']
  }, {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 10.9,
    tags: ['Tradicional']
  }, {
    id: 4,
    name: 'Café Gelado',
    description: 'bebida preparada com café expresso e cubos de gelo',
    image: cubano,
    price: 12.9,
    tags: ['tradicional', 'Gelado']
  }, {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 11.9,
    tags: ['tradicional', 'com leite']
  }, {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 12.9,
    tags: ['tradicional', 'com leite']
  }, {
    id: 7,
    name: 'Cappuccino',
    description: 'Bebida com canela feita de doses iguais de café, lete e espuma',
    image: capuccino,
    price: 13.9,
    tags: ['tradicional', 'com leite']
  }, {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 14.9,
    tags: ['tradicional', 'com leite']
  }, {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: 15.9,
    tags: ['tradicional', 'com leite']
  }, {
    id: 10,
    name: 'Chocolate Quente',
    description: 'bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 16.9,
    tags: ['especial', 'com leite']
  }, {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café espresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 17.9,
    tags: ['especial', 'alcoólico', 'gelado']
  }, {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 18.9,
    tags: ['especial']
  }, {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 19.9,
    tags: ['especial']
  }, {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base se café, uisque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 20.9,
    tags: ['especial', 'alcoólico']
  }
]
