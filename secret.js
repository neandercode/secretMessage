let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
secretMessage.pop();
secretMessage.push("to", "program");
secretMessage.splice(7, 1, "right");
secretMessage.splice(0, 1, "Programming");
secretMessage.splice(6, 5, "know");

console.log(secretMessage.join());
