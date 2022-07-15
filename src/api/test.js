import request from "../utils/request";

export function test() {
  return request({
    url: "/admin/test/list",
    method: "GET",
  });
}
