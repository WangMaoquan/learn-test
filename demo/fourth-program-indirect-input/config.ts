// 全局配置对象
export const config = {
  allowTellAge: false,
  getAge() {
    return this.age;
  },
  age: 20,
};

export const name = 'decade';
