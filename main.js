let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: `"The beauty you see in anything is a reflection the of beauty in you."`,
    person: `Maram`,
  },
  {
    quote: `"Since we're all going to die, it's obvious that when and how don't matter."`,
    person: `The Stranger`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`,
  },
  {
    quote: `"Fear does not prevent death, it prevents life."`,
    person: `Naguib Mahfouz`,
  },
  {
    quote: `"All our knowledge - past, present, and future cannot be compared to what we'll never know"`,
    person: `Konstantin Tsiolkovsky`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
