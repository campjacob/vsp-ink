import fs from "fs";

const API_KEY = process.env.FAVQS_API_KEY;

if (!API_KEY) {
  console.error("Missing FAVQS_API_KEY");
  process.exit(1);
}

async function run() {
  const res = await fetch(
    "https://favqs.com/api/quotes/?filter=37898&type=user",
    {
      headers: {
        Authorization: `Token token=${API_KEY}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`FavQs request failed: ${res.status}`);
  }

  const data = await res.json();

  if (!data.quotes || data.quotes.length === 0) {
    throw new Error("No favorite quotes returned");
  }

  const quote =
    data.quotes[Math.floor(Math.random() * data.quotes.length)];

  const output = {
    quote: {
      text: quote.body,
      author: quote.author,
    },
    source: "favqs",
    updated: new Date().toISOString(),
  };

  fs.writeFileSync(
    "_data/quote.json",
    JSON.stringify(output, null, 2)
  );

  console.log("Quote updated");
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});