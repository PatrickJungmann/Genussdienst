import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="d-flex flex-column justify-content-around align-items-center p-4">
            <h1 className="text-center">Fehler 404 <br /> Hier findest du keinen Genuss</h1>
            <div>
                <Link href="/">
                    <Button variant="danger" className="bi bi-back"> Hier entlang zurück zum Genuss</Button>
                </Link>
            </div>
        </div>
    );
}
