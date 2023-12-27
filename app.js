import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });
const ndb = new Database("ducdb.sqlite", { create: true });

const query = db.query("select 'Hello world' as message;");
const msg = query.get();
console.log(msg.message); // => "Hello world"
// query.get(); // => { message: "Hello world" }

db.run("drop table if exists users");
db.run(
  "create table if not exists users (id integer primary key, fname text, lname text)"
);

const insertUser = db.prepare("insert into users (fname,lname) values (?,?)");
insertUser.run(["jon", "doe"]);
insertUser.run(["frank", "tank"]);

const dir = import.meta.dir;

// function main() {
//   businesses.forEach((business) => {
//     if (masterTimer % business.renewTime === 0) {
//       money += business.revenue;
//     }
//   });

//   masterTimer++;
//   setTimeout(main, 10);
// }
// process.env.YOO = "you";
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
      // console.log(req);
      const htmx = Bun.file(dir + "/dep/htmx.min.js");
      const resp = new Response(htmx);
      resp.headers.set("content-type", "text/javascript");
      return new Response(htmx);
    }
    // console.log("popcicleStand");

    if (url.pathname == "/popcicleStand")
      // console.log("popcicleStand");
      return new Response(Bun.file(dir + "/components/popSomeElse.html"));
  },
});

// import.meta.url;
// console.log(process.env.YOU, process.env.FOO);

console.log("got that shit done homie");
