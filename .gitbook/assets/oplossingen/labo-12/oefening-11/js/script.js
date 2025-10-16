"use strict";

let email = "sven.maes@ap.be";

let index = email.indexOf("@");
let prefix = email.substring(0, index);

let person = prefix.replace(".", " ").toUpperCase();

console.log(`De eigenaar van ${email} is ${person}.`);
