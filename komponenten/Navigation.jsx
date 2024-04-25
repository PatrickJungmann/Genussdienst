import Link from "next/link"
import Image from "next/image"
import { Badge } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function Navigation() {
    const wAnzahl = useSelector((state) => state.warenkorb.wAnzahl);

    return (
        <div className="shadow sticky-top p-2 mb-2 bg-danger">
            <div className="d-flex justify-content-between align-items-center">
                <Link href="/">
                    <Image src={'/bilder/logo.png'} alt="logo" width={175} height={90} />
                </Link>

                <div style={{ position: "relative", marginRight: "15px" }}>
                    <Link href="/warenkorb">
                        <div style={{ position: "relative" }}>
                            <Image src={'/bilder/warenkorb.png'} alt="warenkorb" width={30} height={30} />
                            {wAnzahl > 0 && (
                                <Badge pill bg="success" style={{ position: "absolute", right: "20px", top: "-13px" }}>{wAnzahl}</Badge>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
