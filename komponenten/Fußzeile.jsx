import Link from "next/link";

export default function Fußzeile() {
    return (
        <div className="d-flex fixed-bottom justify-content-between p-2 text-secondary bg-light footer mt-auto">
            <h6 className="text-center">2024 © Genussdienst GmbH. <br /> All Rights Reserved.</h6>
            <h6 className="text-center">Öffnungszeiten: <br /> Dienstag - Sonntag (Montag Ruhetag) 10:00 - 22:00 Uhr geöffnet</h6>
            <h6 className="text-center">Telefon: 07231 / 76767 <br /> E-Mail: info@genussdienst.de</h6>
            <h6 className="text-center">
                <Link href="/" className="text-danger text-decoration-none">Impressum</Link>
                <br />
                <Link href="/" className="text-danger text-decoration-none">Presse</Link>
            </h6>
        </div>
    );
}
