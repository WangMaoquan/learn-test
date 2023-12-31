import { User, fetchUserAge, userAge } from './User';
import { name } from './config';
import { innerHeightFn } from './height';
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

export const tellName = () => {
  return name + '111';
};

// node process.env
// vite webpack import.meta.xxx
export const getEnvUserAge = () => {
  return Number(process.env.USER_AGE);
};

export const getGlobalObjectUserAge = () => {
  return user.age;
};

export const getDoubleInnerHeight = () => {
  return innerHeightFn() * 2;
};
