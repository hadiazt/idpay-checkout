const { IDPayClient } = require('../lib/main.js')

const Client = IDPayClient('6a7f99eb-7c20-4412-a972-6dfb7cd253a4', true);

Client.CreatePayment({
  // Name?: String;
  // Mail?: String;
  Phone: "String",
  Amount: 1000,
  Order_ID: 'Sing',
  // Description?: String;
  CallBackURL: "localhost:9000",
})
  .then().catch((e) => console.log(e))
