import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import mongodb from "@/utils/monogdb";
import Produkt from "@/models/Produkt";
import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addProdukte } from "@/redux/warenkorbSlice";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Produktseite({ produkt }) {

    const [preis, setPreis] = useState(produkt.preis);
    const [extras, setExtras] = useState([]);
    const [menge, setMenge] = useState(1);
    const dispatch = useDispatch();
    const router = useRouter();

    const addExtra = (e, extra) => {
        const checked = e.target.checked;
        if (checked) {
            setPreis(preis + extra.preis)
            setExtras([...extras, extra])
        } else {
            setPreis(preis - extra.preis)
            setExtras(extras.filter((alleExtras) => alleExtras._id !== extra.id))
        }
    }

    const zumWarenkorb = () => {
        const _id = uuidv4();
        dispatch(addProdukte({ ...produkt, extras, preis, menge, _id }))
        router.push("/warenkorb");
    }

    if (!produkt) {
        return (
            <div>
                <h2>
                    Produkt nicht vorhanden
                </h2>
            </div>
        )
    }
    return (
        <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            <div>
                <Link href="/" className="text-danger font-weight-bold text-decoration-none">
                    <Button variant="danger" className="bi bi-back"> Hier entlang für noch mehr Genuss</Button>
                </Link>
            </div>

            <div className="row row-cols-2 mt-2">
                <div>
                    <Image className="rounded-3"
                        src={produkt.bild}
                        alt={produkt.name}
                        width={600}
                        height={600}
                        layout="responsive" />
                </div>
                <div>
                    <h1>
                        {produkt.name}
                    </h1>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2 className="text danger">
                                {preis.toFixed(2)} €
                            </h2>
                        </ListGroupItem>

                        <ListGroupItem>
                            {produkt.beschreibung}
                        </ListGroupItem>

                        <ListGroupItem className='d-flex flex-column'>
                            {produkt.extras.lenght ? "Extras: " : <p></p>}
                            {produkt.extras.map((extra) => (
                                <span key={extra._id}>
                                    <input className="form-check-input me-2"
                                        type="checkbox"
                                        id={extra.text}
                                        onChange={(e) => addExtra(e, extra)}
                                    />{extra.text}
                                </span>
                            ))}
                        </ListGroupItem>

                        <ListGroupItem>
                            <input className="form-control w-50"
                                type="number"
                                value={menge} min="1" max="100"
                                onChange={(e) => setMenge(e.target.value)}
                            />
                        </ListGroupItem>

                        <ListGroupItem>
                            <div className="row shadow">
                                <Button variant="danger" onClick={zumWarenkorb}>zum Warenkorb hinzufügen</Button>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        </motion.div>
    )
}

export async function getServerSideProps(context) {
    const url = context.params.url;
    await mongodb.dbConnect();
    const produkt = await Produkt.findOne({ url }).lean();
    return {
        props: {
            produkt: JSON.parse(JSON.stringify(produkt))
        }
    }
}
