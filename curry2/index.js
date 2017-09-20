// // ES5

const _ = require('lodash');
const flow = require('lodash/flow');
const shallowArr = require('shallow-equal/arrays');

const state = {
  domains: [{
    fqdn: 'a.com',
    expired: true,
    price: 10,
  }, {
    fqdn: 'b.com',
    expired: true,
    price: 20,
  }, {
    fqdn: 'c.com',
    expired: false,
    price: 15,
  }, {
    fqdn: 'd.com',
    expired: true,
    price: 25,
  }],
};

const state2 = {
  shs: [{
    fqdn: 'a.com',
    expired: true,
    price: 20,
  }, {
    fqdn: 'b.com',
    expired: true,
    price: 20,
  }, {
    fqdn: 'c.com',
    expired: false,
    price: 15,
  }, {
    fqdn: 'd.com',
    expired: true,
    price: 25,
  }],
};


const computes = [];

const select = (productType) => (state) => state[productType];

const selectExpiredDomains = (domains) => domains.filter(d => d.expired);

const computePrice = (ratio) => (domains) => {
  const found = computes.filter((c) => shallowArr(c.entry, domains.map(d => d.fqdn)));
  if (Array.isArray(found) && found.length) {
    return found[0].value;
  }

  console.log('.');

  const price = domains.reduce((acc, d) => acc + d.price * ratio, 0);
  computes.push({ entry: domains.map(d => d.fqdn), value: price });
  return price;
};

const d1 = flow(
  select('domains'),
  selectExpiredDomains,
  computePrice(2)
)(state);

console.log('d', d1);

const d2 = flow(
  select('domains'),
  selectExpiredDomains,
  computePrice(2)
)(state);

console.log('d', d2);

const d3 = flow(
  select('domains'),
  selectExpiredDomains,
  computePrice(2)
)(state);

console.log('d', d3);
