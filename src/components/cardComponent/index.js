import Link from "next/link"
import { Card, CardBody, CardText, CardTitle } from "reactstrap"


const CardComponent = ({ product, name }) => {
    return (
        <Link href={`/allProduct/${name}/${product._id}`}>
            <a style={{textDecoration:"none",color:"black"}}>
            <Card style={{ width: '18rem', height: "400px", cursor: "pointer" }}  >
                <CardBody style={{ height: "15%" }} >

                    <CardTitle tag="h5" >
                        {product.name}
                    </CardTitle>

                </CardBody>
                <div style={{ height: "40%" }}>
                    <img
                        alt="Card cap"
                        src={product.img.length > 100 ? product.img : "/gadjet.png"}
                        width="100%"
                        height="100%"
                    />
                </div>
                <CardBody style={{ height: "45%" }} >
                    <CardText style={{ height: "70%", overflow: "hidden" }}>
                        {product.description}
                    </CardText>
                    <CardText style={{ height: "30%" }}>
                        {product.price}
                    </CardText>
                </CardBody>
            </Card>
            </a>
        </Link>

    )
}

export default CardComponent