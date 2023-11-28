export const userAge = () => {
  // 直接返回一个值
  // 通过环境变量读取
  // 通过 User.age 获取
  return 1;
};

export const fetchUserAge = () => {
  // 这里可以通过 api 请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
