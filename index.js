var crypto, failure, genesis, success, transaction
let config = require('config');
genesis = require('genesis.js')

crypto = require('crypto')

transaction = new genesis.transaction()

failure = function (reason) {
  return console.log(reason)
}

success = function (data) {
  return console.log(data)
}

transaction.wpf_create({
  transaction_id: crypto.randomBytes(16).toString('hex'),
  usage: 'Demo WPF Transaction',
  description: 'This is my first WPF transaction',
  amount: '100',
  currency: 'USD',
  customer_email: 'email@example.com',
  customer_phone: '0123456789',
  notification_url: 'http://my.host.name.tld:1234/notifier',
  return_success_url: 'http://my.host.name.tld/success',
  return_failure_url: 'http://my.host.name.tld/failure',
  return_cancel_url: 'http://my.host.name.tld/cancel',
  billing_address: {
    first_name: 'John',
    last_name: 'Doe',
    address1: '123 Str.',
    zip_code: '10000',
    city: 'New York',
    country: 'US'
  },
  transaction_types: ['authorize3d', 'sale']
})
  .send()
  .then(success)
  .catch(failure)
