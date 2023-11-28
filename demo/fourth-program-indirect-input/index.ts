import { fetchUserAge, userAge } from './User';

export const add = (a: number, b: number) => a + b;

export const doubleUserAge = () => userAge() * 2;

export const FetchDoubleUserAge = async () => {
  const r = await fetchUserAge();
  return r * 2;
};
