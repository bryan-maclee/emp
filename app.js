console.log("hello world");
var masterTimer = 0;
const dir = import.meta.dir;

function biz(name, revenue, renewTime, purchaseCost) {
  this.name = name; //name of business
  this.revenue = revenue; //amount of money per renewTime
  this.renewTime = renewTime; //time in milliseconds
  this.purchaseCost = this.purchaseCost; //cost to purchase business
  this.level = 0; //level of business
  this.perks = []; //purchased perks of business
}

const popcicleStand = new biz("popcicleStand", 10, 5000, 100);
const carWash = new biz("carWash", 100, 15000, 3000);
const pizzaDelivery = new biz("pizzaDelivery", 500, 50000, 60000);
const movieTheater = new biz("movieTheater", 2500, 100000, 240000);
const bank = new biz("bank", 15000, 100000, 600000);
const techCompany = new biz("techCompany", 75000, 400000, 12000000);
const airline = new biz("airline", 250000, 10000000, 600000000);
const oilCompany = new biz("oilCompany", 1250000, 3000000, 600000000);

const businesses = [];

function addBusiness(business) {
  businesses.push(business);
}

function main() {
  businesses.forEach((business) => {
    if (masterTimer % business.renewTime === 0) {
      money += business.revenue;
    }
  });

  masterTimer++;
  setTimeout(main, 10);
}
process.env.YOO = "you";
// let D = new URL("index.html");

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    const meth = req.method;
    if (meth === "POST") {
      console.log(req);
      if (url.pathname.endsWith("/two.html"))
        return new Response(Bun.file(dir + "/twos.html"));
      // return new Response(Bun.file(import.meta.dir + "/twos.html"));
    }
    if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html"))
      return new Response(Bun.file(dir + "/index.html"));
    if (url.pathname.endsWith("/htmx.min.js")) {
      // console.log("htmx");
      console.log(req);
      const htmx = Bun.file(dir + "dep/htmx.min.js");
      const resp = new Response(htmx);
      resp.headers.set("content-type", "text/javascript");
      return new Response(htmx);
    }

    if (url.pathname.endsWith("/popcicleStand"))
      return new Response(console.log("/components/popSomeElse.html"));
    // console.log(req);

    // all other routes
    //  return new Response("Hello!");
  },
});

import.meta.url;
// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     return new Response(D);
//   },
// });
// console.log(`Listening on http://localhost:${server.port} ...`);
// console.log(process.env.YOU, process.env.FOO);

console.log("got that shit done homie");
