const { IDPayClient } = require('../lib/main.js')

const Client = IDPayClient('6a7f99eb-7c20-4412-a972-6dfb7cd253a4', true);

Client.CreatePayment({
  // Name: String,
  // Mail: String,
  Phone: "09036812503",
  Amount: 1000,
  Order_ID: 'Order_ID',
  // Description: String;,
  CallBackURL: "localhost:9000",
})
  .then((r) => console.log(r)).catch((e) => console.log(e))
