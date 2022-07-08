/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

interface TownUserInterface {
  name: string;
  surname: string;
  sex: 'male' | 'female',
  age: number;
  income: number;
  married: boolean;
  hasCar: boolean;
}

const tui: TownUserInterface = {
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
};

//* **********************************/

interface FakeStoreInterface {
  id: number;
  qty: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    rate: number;
    count: number;
  }
}

const fsif: FakeStoreInterface = {

  id: 1,
  qty: 15,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

//* **********************************/

interface UsersWithPassInterface {
  username: string,
  password: number,
  id: string,
}
interface UsersWithPassAndOnlineInterface extends UsersWithPassInterface {
  username: string,
  password: number,
  id: string,
  isOnline: boolean,
}

const users: UsersWithPassInterface[] = [
  {
    username: 'labas',
    password: 12345,
    id: 'u_123',

  },
  {
    username: 'krabas',
    password: 54321,
    id: 'u_122',

  },
  {
    username: 'batas',
    password: 7777,
    id: 'u_121',

  },
];

// parasyti praturtinimo su isOnline funkcija

function praturtintiUsers(arr: UsersWithPassInterface[]): UsersWithPassAndOnlineInterface[] {
  const userWithisOnline: UsersWithPassAndOnlineInterface[] = arr.map((uObj: UsersWithPassInterface) => {
    console.log('uObj===', uObj);
    return {
      ...uObj,
      isOnline: Boolean(Math.round(Math.random())),
    };
  });
  return userWithisOnline;
}
const turtingi = praturtintiUsers(users);
console.log('turtingi===', turtingi);
