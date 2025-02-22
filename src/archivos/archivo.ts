// const name:string = 'Jhonatan';

// // Se declara 2 tipos de
// let edad:number|'25' = 33;
// const isIng:boolean = true;
// edad = '25'
// console.log({name, edad, isIng});

// let user: undefined;
// console.log(user);

// let otroUser:null ;
// otroUser = null;

// console.log(otroUser);// imprim null
// console.log(user === otroUser);// imprime true

// if(!otroUser){ // si es falso
//     console.log(" condicon es vedadera");
// }else{ // si es verdadera
//     console.log("la cantidad es falsa");
// }

let id: symbol = Symbol(25); // declaramos un simbolo
let name2: symbol = Symbol('Hola'); // declaramos un simbolo

let user2 = {
  [id]: '25',
  [name2]: 'Juanito',
  name: 'pedro',
  getId() {
    return this[id];
  },
};

// getId(){ parametro
//     return this[id];
// }
// getId(45); argument

console.table(user2);
console.log(user2.name);

// typeof => hace la validacion del tipo de dato
type argument = number | string;
function numeros(number: unknown): argument {
  if (typeof number === 'number') {
    return number * 125;
  }
  return 'Validar numero';
}

console.log(numeros(25));
console.log(numeros('hola'));

type type = Date;
type type2 = string;

type type3 = type2 extends string ? true : false;
type type4 = type extends Date ? number : string;
type comparcion = type extends Date ? Date : undefined;

console.log(new Date());

// export{}
// Se llama instancia new class

type check = [] extends object ? 'Aroon' : 'Jesus';

const error = (mensaje: string) => {
  throw new Error(mensaje);
};
// object Object
let strings: object = ['a', 'b'];
let function2: Function = () => 2;

interface carrera {
  name: string;
  age: number;
  email: string;
}

interface semestre extends carrera {
  title: string;
  description: string;
  date: Date;
  carrera: carrera;
}

// type todo =  semestre extends semestre;}
// interface todo extends semestre {
//     carerra: carrera
// }

const estudiante: semestre = {
  name: 'Ing de Software',
  age: 25,
  email: 'ing@gmail.com',

  title: 'Estudiante',
  description: 'Es la mitad de la carrera',
  date: new Date(),
  carrera: {
    name: 'Ing de Software',
    age: 25,
    email: 'ing@gmail.com',
  },
};

console.log(estudiante);

const lenguajes: string[] = ['java', 'python', 'rust'];

interface Curso {
  name: string;
  horas: number;
  notas: number[];
  estado?: string;
}

const curso: Curso = {
  name: 'Lenguaje de programacion ',
  horas: 15,
  notas: [15, 12, 25],
};

// atributo y tipo = value

console.log(curso);

//

type Dog = {
  like: boolean;
  raza: boolean;
};

type Cat = {
  dosil: boolean;
};
type Animal = {
  name: string;
};

type union = Dog | Cat | Animal;

let dog: union = {
  name: 'Doger',
  like: true,
  raza: true,
};

let cat: union = {
  name: 'Cat',
  dosil: false,
};

let cruce: union = {
  name: 'Peking',
  like: true,
  raza: true,
  dosil: false,
};

let partial: union = {
  name: 'Bold',
  like: true,
};
console.log({ cat, cruce, partial });

type nuevaRaza = Dog & Cat;
const nuevaAnimal: nuevaRaza = {
  like: true,
  raza: true,
  dosil: true,
};

console.log(nuevaAnimal);

let a: number[] = [1, 2, 3];
let b: Array<string> = ['a', 'b', 'c'];
let c: (string | number)[] = [1, 'a', 2, 'b'];

type categoria = {
  name: string;
  descripcion: string;
  esatdo: number;
};

type provedor = {
  [keyof: string]: string;
};

type producto = {
  model: string;
  descripcion: string;
  fecha_ing: Date;
  fecha_ven: Date;
  categoria: categoria;
  provedores: provedor;
};

type productos = producto[];
let ingreso: productos = [
  {
    model: 'BMV',
    descripcion: 'Ayacucho',
    fecha_ing: new Date(),
    fecha_ven: new Date(),
    categoria: {
      name: 'Ing de Software',
      descripcion: 'Arequipa',
      esatdo: 99999999,
    },
    provedores: {
      A1: 'Llegada',
      A2: 'Llegada',
      A3: 'Llegada',
    },
  },
];

