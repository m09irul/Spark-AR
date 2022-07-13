const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
//const Networking = require('Networking');

// Trigger actions after set delays/intervals
const Time = require('Time');

const Patches = require('Patches');

const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";

function getPrice()
{
  // Networking.fetch(url).then(function(result){
  //   if(result.status >= 200 && result.status < 300) return result.json();

  //   throw new Error("Request failed with status code: " + result.status);
  // }).then(function(json){
  //   Diagnostics.log(json);
  //   priceText.text = json;
  // }).catch(function(error){
  //   Diagnostics.log(error);
  // });

}
getPrice();

const targetTracker = Scene.root.findFirst('targetTracker0');

Patches.inputs.setBoolean('tracking', targetTracker.isTracking);
