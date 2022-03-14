'use strict';

document.getElementById('cart-oil').addEventListener('submit', estimateTotal);

function estimateTotal(event) {
  event.preventDefault();

  if (document.getElementById('s-state').value === '') {
    alert('Silakan masukkan jasa pengiriman.');

    document.getElementById('s-state').focus();
  }

  var btElxtra = parseInt(document.getElementById('txt-q-extra').value, 10) || 0,
    state = document.getElementById('s-state').value;

  var methods = document.getElementById('cart-oil').r_method,
    shippingMethod;

  var taxFactor = 1;
  if (state === 'JNT') {
    taxFactor = 1.075;
  }
  var taxFactor = 1;
  if (state === 'JNE') {
    taxFactor = 1.075;
  }

  //pickup, usps, ups
  var shippingCostPer = 0;
  switch (shippingMethod) {
    case 'pickup':
      shippingCostPer = 0;
      break;
    case 'usps':
      shippingCostPer = 2;
      break;
    case 'ups':
      shippingCostPer = 3;
      break;
  }

  var totalBottles = btElxtra,
    shippingCost = totalBottles + shippingCostPer;

  var shippingCost = btElxtra * shippingCostPer;

  var subtotal = btElxtra * 30000;

  var estimate = 'Rp ' + (subtotal + shippingCost);

  var ongkir = 'Rp ' + 30000;

  var total = subtotal + 30000;

  document.getElementById('txt-estimate').value = estimate;
  document.getElementById('result').innerHTML = ongkir;
  document.getElementById('results').innerHTML = 'Rp ' + total;
}
