<center>

<h1> idpay-checkout </h1>

### Simple Module For IDPay Website Payment Gateway

</center>

# 🕹 Usage

Install the package from `npm` / `yarn` or any other package managers.

```
npm install idpay-checkout
# or
yarn add idpay-checkout
```

```js
const { IDPayClient } = require("idpay-checkout");
// or
import { IDPayClient } from "idpay-checkout";

/**
 * Create IDPay object. Wrapper around constructor.
 * @param  {String} API_KEY [Required]
 * @param  {Boolean} SandBox [Required]
 */
const Client = IDPayClient("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", true);
```

# 📢 API

### Visit test file for [examples](https://github.com/hadiazt/idpay-checkout/blob/main/test/index.js)
