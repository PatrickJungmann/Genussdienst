import { Carousel } from "react-bootstrap"
import Image from "next/image"

export default function Slider() {
    return (
        <div>
            <Carousel controls={false} fade={true} interval={2000} className="d-flex w-100 rounded-3 ">
                <Carousel.Item >
                    <Image className="d-flex h-100 w-100 rounded-3 "
                        src='/Bilder/Essen/burger.jpg'
                        alt="burger"
                        width={3000}
                        height={1000}
                    /* layout="responsive" */
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-flex h-100 w-100 rounded-3 "
                        src='/Bilder/Essen/pizza.jpg'
                        alt="pizza"
                        width={3000}
                        height={1000}
                    /* layout="responsive" */
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-flex h-100 w-100 rounded-3 "
                        src='/Bilder/Essen/burrito.jpg'
                        alt="burrito"
                        width={3000}
                        height={1000}
                    /* layout="responsive" */
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
