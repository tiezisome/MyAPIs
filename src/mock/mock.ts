// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs');

// demo
const imgurl: string = Mock.Random.image(
  '200x100',
  '#50B347',
  '#FFF',
  'Mock.js',
);
const date: string = Mock.Random.date('yyyy-MM-dd');
const data: any = Mock.mock({
  'string|4': '哈哈',
  imgurl: imgurl,
  date: date,
});

export default data;
