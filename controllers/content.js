"use strict";
console.log("Social Nope runs.")
// content.js

var urls = [
  "izTaPcZZAXs", // REALLY CUTE kittens
  "SigNqauvXB0", // kittens
  "YPv9yKC76hE", // kittens
  "qdUOH3GeqxY", // fish tank
  "ArGfDo1xQuM", // turtles
  "aaF-49vtAXw", // kelp fish
  "bdnHKdb-Oss", // fish
  "sI9OTeTGcrw", // fish
  "TWlAuqLFexM", // bison
  "muuZNMiZ2BM", // waterfalls
  "m7rWhCqsh2I",  // Norway
  "6oAVx6It5MM", // Chicago
  "heiD4L5N724", // Greenland
  "fTKMHkIutY4", // punchbowl waves
  "nOI8MEebVkU", // sleighride
  "eyU3bRy2x44" // fireplace
  ];

var url = urls[Math.floor(Math.random()*urls.length)];

var now = new Date();
var hour = now.getHours();
var bedTime = 22;
var wakeTime = 6;

if (hour >= bedTime || now < wakeTime) {
  console.log("Social Nope is redirecting.")
  window.location = "https://www.youtube.com/embed/" + url + "?iv_load_policy=3&start=60"; // iv_load_policy=3 disables annotations
}
