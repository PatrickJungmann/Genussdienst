import { Table, Button, CloseButton, Spinner } from "react-bootstrap"
import { useRouter } from "next/router"
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { toast, Slide } from 'react-toastify'

export default function Bestellung({ bestellungen }) {
    const router = useRouter();
    const status = ["Bestellung eingegangen", "In Zubereitung", "Unterwegs", "Geliefert"];

    const statusUpdate = async (id, aktuellerStatus) => {
        try {
            if (aktuellerStatus <= 2) {
                await axios.put(`http://localhost:3000/api/bestellungen/` + id, { status: aktuellerStatus + 1 });
                router.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const bestellungEntfernen = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/bestellungen/` + id);
            router.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Alle Bestellungen</h1>
            <div className="row mt-4">
                <div className="col-12">
                    <Table hover responsive>
                        <thead>
                            <tr>
                                <th>Bestell Nr.</th>
                                <th>Kunde</th>
                                <th>Adresse</th>
                                <th>Status</th>
                                <th>Entfernen</th>
                            </tr>
                        </thead>
                        {bestellungen.map((bestellung) => (
                            <tbody key={bestellung._id}>
                                <tr>
                                    <td>
                                        <Link href={`/bestellungen/${bestellung._id}`} className="text-danger" >
                                            {bestellung._id}
                                        </Link>
                                    </td>
                                    <td>{bestellung.kunde}</td>
                                    <td>{bestellung.adresse}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => statusUpdate(bestellung._id, bestellung.status)}>{status[bestellung.status]}</Button>
                                    </td>
                                    <td>
                                        <Button type="button" className="btn-close" aria-label="Close" onClick={() => bestellungEntfernen(bestellung._id)}></Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
            <div className="d-flex justify-content-center p-3">
                <Link href="/backend/login" passHref>
                    <Button variant="outline-danger">
                        Logout
                    </Button>
                </Link>
            </div>
        </div >
    )
}

export async function getServerSideProps(ctx) {
    const meinCookie = ctx.req?.cookies || "";
    if (meinCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/backend/login",
                permant: false
            }
        }
    }
    const res = await axios.get(`http://localhost:3000/api/bestellungen`);
    return {
        props: { bestellungen: res.data },
    };
}