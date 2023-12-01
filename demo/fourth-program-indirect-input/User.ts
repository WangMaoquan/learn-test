import axios from 'axios';

export const userAge = () => {
  // 直接返回一个值
  // 通过环境变量读取
  // 通过 User.age 获取
  return 1;
};

export const fetchUserAge: () => Promise<number> = () => {
  // 这里可以通过 api 请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};

interface User {
  name: string;
  age: number;
}

/*
模拟 调用第三方模块
*/
export async function getDoubleUserAgeByAxios() {
  // const user: User = await axios('/user/1');
  const user: User = await axios.get('/user/1');
  return user.age * 2;
}
