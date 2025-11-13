"use strict";

let firstname = "sven";
let lastname = "maes";

let firstLetter = firstname.substring(0, 1).toUpperCase();
let firstLetterLastname = lastname.substring(0, 1).toUpperCase();
let lastnameUpperCase = firstLetterLastname + lastname.substring(1);

console.log(
  `de naam "${firstname}" ${lastname} zal worden afgekort als "${firstLetter}.${lastnameUpperCase}"`
);
