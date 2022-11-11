import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import styles from "../../../styles/eachElement.module.css";

export async function getServerSideProps(context) {
  const { id, name } = context.params;
  return {
    props: { name, id },
  };
}


const Id = ({ name, id }) => {

  const [element, setElement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleBasket, setToggleBasket] = useState(false);
  const navigate = useRouter()

  useEffect(() => {
    axios.get(`http://localhost:5000/api/gadjetGet/${name}`).then((res) => {
      setLoading(false);
      setElement(res.data);
    });
  }, []);

  const card = element.find((item) => item._id == id);

  const addToBasket = () => {
    try {
      axios.post("http://localhost:5000/api/basketPost", card).then(() => {
        setToggleBasket(true);
        localStorage.setItem("isToggle", JSON.stringify(true));
      });
    } catch (e) {
      console.log(e);
    }
  };

  const foo = () => {
    return JSON.parse(localStorage.getItem("isToggle"));
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <Card
          style={{
            width: "30%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            alignItems: " center",
            background: "aliceblue",
            border:"none"
          }}
        >
          <div className={styles.imageBlock}>
            <img src={card.img}  />
          </div>
          <CardBody>
            <CardTitle tag="h5" style={{ color: "black" ,fontFamily: "Inter"}}>
              {card.name}
            </CardTitle>

            <CardText style={{fontFamily: "Inter"}}>{card.description}</CardText>
            <CardText style={{fontFamily: "Inter"}}>{card.price}</CardText>
          </CardBody>
          <CardFooter style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
            {foo() ? (
              <Link href={"/basket"}>
                <a>
                  <Button color="info" style={{width:"150px"}}> Go To Basket </Button>
                </a>
              </Link>
            ) : (
              <a>
                <Button color="warning" onClick={() => addToBasket()} style={{width:"150px"}}>
                  Add to Basket
                </Button>
              </a>
            )}
            <Button color="success" style={{width:"150px"}} onClick={()=>navigate.push("/contactUs")} >Contact Us</Button>
          </CardFooter>
        </Card>
      )}{" "}
    </div>
  );
};
export default Id;
