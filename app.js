var masterTimer = 0;

function biz (name, revenue, renewTime, purchaseCost) {
  this.name = name; //name of business
  this.revenue = revenue; //amount of money per renewTime
  this.renewTime = renewTime; //time in milliseconds
  this.purchaseCost = this.purchaseCost; //cost to purchase business
  this.level = 0; //level of business
  this.perks = []; //purchased perks of business
}

const popcicleStand = new biz('popcicleStand', 10, 5000, 100);
const carWash = new biz('carWash', 100, 15000, 3000);
const pizzaDelivery = new biz('pizzaDelivery', 500, 50000, 60000);
const movieTheater = new biz('movieTheater', 2500, 100000, 240000);
const bank = new biz('bank', 15000, 100000, 600000);
const techCompany = new biz('techCompany', 75000, 400000, 12000000);
const airline = new biz('airline', 250000, 10000000, 600000000);
const oilCompany = new biz('oilCompany', 1250000, 3000000, 600000000);

const businesses = [];

function addBusiness (business) {
  businesses.push(business);
}


function main() {

businesses.forEach(business => {
  if (masterTimer % business.renewTime === 0) {
    money += business.revenue;
  }
});
  
    masterTimer++;
    setTimeout(main, 10);
}
