// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "@/utils/monogdb";
import jsondb from "@/jsondb/produkte";
import Produkt from "@/models/Produkt";

export default async function handler(req, res) {
  await mongodb.dbConnect();
  await Produkt.deleteMany();
  await Produkt.insertMany(jsondb.produkte);
  const produkte = await Produkt.find({});
  /* await mongodb.dbDisconnect(); */
  /* res.send({ text: "Daten gespeichert" }); */
  res.send(produkte)
}
