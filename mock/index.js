import Mock from "mockjs";
import { testApiList } from "./test";
const domain = "/api";

testApiList.forEach((item) => {
  const { url, type, response } = item;
  Mock.mock(domain + url, type, response);
});
