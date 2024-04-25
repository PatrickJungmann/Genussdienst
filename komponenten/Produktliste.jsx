import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function Produktliste({ produkte }) {
    return (
        <div className="mb-5"> {/* Hier habe ich mb-5 hinzugefügt, um Platz für den Button am unteren Rand zu schaffen */}
            <div className="row row-cols-2">
                {produkte?.map((produkt) => (
                    <div key={produkt.name} className="mt-3 col">
                        <Card className="card flex-row">
                            <Link href={`/produkte/${produkt.url}`} passHref className="w-50">
                                <Card.Img className="card-img-left example-card-img-responsive w-100 rounded" src={produkt.bild} />
                            </Link>
                            <Card.Body className="text-center my-auto">
                                <Card.Title>
                                    {produkt.name}
                                </Card.Title>
                                <Card.Text>
                                    {produkt.beschreibung}
                                </Card.Text>
                                <Card.Title>
                                    {produkt.preis.toFixed(2)} €
                                </Card.Title>
                                <Link href={`/produkte/${produkt.url}`} passHref>
                                    <Button variant="danger">Bestellen</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Mitarbeiter Login Button am unteren Rand der Produktliste */}
            <div className="d-flex justify-content-center p-3">
                <Link href="/backend/login" passHref>
                    <Button variant="outline-danger">
                        Mitarbeiter Login
                    </Button>
                </Link>
            </div>
        </div>
    );
}
