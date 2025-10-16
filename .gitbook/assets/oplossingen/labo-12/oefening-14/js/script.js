"use strict";
let text = "Dit is een test. Deze tekst kan lang worden";
let marge = 8;

console.log(`
/${"-".repeat(text.length + marge)}\\
|${" ".repeat(marge / 2)}${text}${" ".repeat(marge / 2)}|
\\${"-".repeat(text.length + marge)}/
`);
