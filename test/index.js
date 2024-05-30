const { IDPayClient } = require("../lib/main.js");

const Client = IDPayClient("b5ff2465-86c0-4723-8846-c67db53064db", true);

// Client.CreatePayment({
//   Name: "String",
//   Mail: "String",
//   Phone: "......",
//   Amount: 1000,
//   Order_ID: "Order_ID",
//   Description: "String",
//   CallBackURL: "",
// })
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

// Client.VerifyPayment({
//   Order_ID: "Order_ID",
//   ID: "a1bc9a8b4cb750c094212b9742e974b5",
// })
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));
