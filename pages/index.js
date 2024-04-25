import Produktliste from "@/komponenten/Produktliste";
import Slider from "@/komponenten/Slider";
import Produkt from "@/models/Produkt";
import mongodb from "@/utils/monogdb";
import Produktseite from "./produkte/[url]";
import { easeOut, motion } from "framer-motion";

export default function Home({ produkte }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Slider />
      <Produktliste produkte={produkte} />
    </motion.div>
  )
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const produkte = await Produkt.find({}).lean();
  return {
    props: {
      produkte: JSON.parse(JSON.stringify(produkte))
    }
  }
}