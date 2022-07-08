/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/indent */
// objektai

interface UserInterface {
    id: string | number;
    readonly name: string; // readonly negalima pakeist
    age: number;
    hasCar: boolean;
    isStudent?: boolean;
  }
  
  const u2: UserInterface = {
    id: 123,
    name: 'Georgia',
    age: 32,
    hasCar: false,
    isStudent: true,
  };
  
  const u1: {
    id: string | number;
    name: string;
    age: number;
    hasCar: boolean;
  } = {
    id: '124s',
    name: 'James',
    age: 18,
    hasCar: true,
  };
  
  u1.name = 'Serbentautas';
  // u1.name = 5;
  
  // u2.name = 'Jill';
  
  interface MathOperationFunciton {
    (x: number, y: number, z: number): number;
  }
  
  const add: MathOperationFunciton = (a, b, c) => a + b + c;
  const minus: MathOperationFunciton = (n1, n2, n3) => n1 - n2 - n3;
  const addResult = add(1, 5, 9);
  console.log('addResult ===', addResult);
  const minusResult = minus(1, 5, 9);
  console.log('minusResult ===', minusResult);