var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

const getMinifiedRecords = (records) => {
  return records.map((record) => ({
    ...record.fields,
  }));
};

export { table, getMinifiedRecords };
