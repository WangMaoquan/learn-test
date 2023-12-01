import { User, fetchUserAge, userAge } from './User';

export const add = (a: number, b: number) => a + b;

export const doubleUserAge = () => userAge() * 2;

export const FetchDoubleUserAge = async () => {
  const r = await fetchUserAge();
  return r * 2;
};

export const getDoubleUserAgeByClassProperty = () => {
  const user = new User();
  return user.age * 2;
};

export const getDoubleUserAgeByClassFun = () => {
  const user = new User();
  return user.getAge() * 2;
};
