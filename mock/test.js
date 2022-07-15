
const testApiList = [
  {
    url: "/admin/test/list",
    type: "get",
    response: () => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: "PC", pv: 1024 },
            { key: "mobile", pv: 1024 },
            { key: "ios", pv: 1024 },
            { key: "android", pv: 1024 },
          ],
        },
      };
    },
  },
];
module.exports = {
  testApiList,
};
