// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require("mockjs");
const data = [];
for (let i = 0; i < 10; i++) {
  data.push(
    Mock.mock({
      id: i + 1,
      name: "@cname",
      imgUrl: '@image("200x100", "#50B347", "#FFF", "Mock.js")',
      date: '@date("yyyy-MM-dd")',
      address: "@region",
      cert: Mock.Random.id(),
    })
  );
}
export default data;
