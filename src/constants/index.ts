import americano from "../assets/americano.png"
import arabe from "../assets/arabe.png"
import cafeComLeite from "../assets/cafe-com-leite.png"
import cafeGelado from "../assets/cafe-gelado.png"
import capuccino from "../assets/capuccino.png"
import chocolateQuente from "../assets/chocolate-quente.png"
import cubano from "../assets/cubano.png"
import expressoCremoso from "../assets/expresso-cremoso.png"
import expresso from "../assets/expresso.png"
import havaiano from "../assets/havaiano.png"
import irlandes from "../assets/irlandes.png"
import latte from "../assets/latte.png"
import macchiato from "../assets/macchiato.png"
import mocaccino from "../assets/mocaccino.png"

export const COFFEES = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: expresso,
    price: 9.9,
    tags: ["tradicional"],
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: americano,
    price: 9.9,
    tags: ["tradicional"],
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: expressoCremoso,
    price: 9.9,
    tags: ["tradicional"],
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: cafeGelado,
    price: 9.9,
    tags: ["tradicional", "gelado"],
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: cafeComLeite,
    price: 9.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 6,
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latte,
    price: 9.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 7,
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: capuccino,
    price: 9.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 8,
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiato,
    price: 9.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mocaccino,
    price: 9.9,
    tags: ["tradicional", "com leite"],
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: chocolateQuente,
    price: 9.9,
    tags: ["especial", "com leite"],
  },
  {
    id: 11,
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubano,
    price: 9.9,
    tags: ["especial", "alcoólico", "gelado"],
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparad com café e leite de coco",
    image: havaiano,
    price: 9.9,
    tags: ["especial"],
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabe,
    price: 9.9,
    tags: ["especial"],
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantily",
    image: irlandes,
    price: 9.9,
    tags: ["especial", "alcoólico"],
  },
]
