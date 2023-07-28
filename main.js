// Variable
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let from_person = document.querySelector("#from-person");

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandi `,
    from: `India`,
  },
  {
    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person: ` Albert Einstayn `,
    from: `Germany`,
  },
  {
    quote: `"No one can make you feel inferior without your consent."`,
    person: ` Eleanor Roosevelt `,
    from: `America`,
  },
  {
    quote: `"Not all those who wander are lost."`,
    person: ` 	J. R. R. Tolkein `,
    from: `French`,
  },
  {
    quote: `"A rose by any other name would smell as sweet."`,
    person: ` William Shakespeare `,
    from: `England`,
  },
  {
    quote: `"Eighty percent of success is showing up."`,
    person: ` Woody Allen `,
    from: `Denmark`,
  },
  {
    quote: `"Elementary, my dear Watson."`,
    person: ` Sherlock Holmes `,
    from: `Booking`,
  },
  {
    quote: `"Frankly, my dear, I don't give a damn."`,
    person: ` Rhett Butler `,
    from: `Canada`,
  },
  {
    quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person: ` Thomas Edison `,
    from: `USA`,
  },
  {
    quote: `"Hell is other people."`,
    person: ` Jean-Paul Sartre `,
    from: `China`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  from_person.innerText = quotes[random].from;
});
