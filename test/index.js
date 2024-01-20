const { IDPayClient } = require('../lib/main.js')

const Client = IDPayClient('6a7f99eb-7c20-4412-a972-6dfb7cd253a4', true);

Client.CreatePayment({
  // Name?: String;
  // Mail?: String;
  // Phone?: String;
  // Amount: Number;
  // Order_ID: 'String',
  // Description?: String;
  // CallBackURL: String;
}).then().catch((e) => console.log(e))
