import { useState } from "react"
import { useRouter } from "next/router"
import { Form, Button, FormControl, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export default function Login() {
    const [benutzer, setBenutzer] = useState(null);
    const [passwort, setPasswort] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const login = async () => {
        try {
            await axios.post("/api/login", {
                benutzer,
                passwort
            })
            router.push("/backend")
        } catch (error) {
            setError(true)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-start">
            <Row className="justify-content-center w-100 mt-5">
                <Col xs={12} md={6} className="text-center">
                    <h1>Mitarbeiter Login</h1>
                    {error && <p className="text-primary mt-2">Login fehlgeschlagen</p>}
                    <Form>
                        <Form.Group className="mb-3" controlId="benutzer">
                            <FormControl
                                type="text"
                                placeholder="Benutzer"
                                onChange={(e) => setBenutzer(e.target.value)}
                                className="w-100"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwort">
                            <FormControl
                                type="password"
                                placeholder="Passwort"
                                onChange={(e) => setPasswort(e.target.value)}
                                className="w-100"
                            />
                        </Form.Group>
                        <Button variant="danger" block onClick={login}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
