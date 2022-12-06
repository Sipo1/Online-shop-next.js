import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import styles from "../../../styles/eachElement.module.css";
import useTranslation from 'next-translate/useTranslation';


export async function getServerSideProps(context) {
  const { id, name } = context.params;
  return {
    props: { name, id },
  };
}


const Id = ({ name, id }) => {
  const { t } = useTranslation()
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
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      {loading ? (
        <div className={styles.loader}>
          <span>{t("common:loading")}</span>
        </div>
      ) : (
        <Card
          className={styles.cards}

        >
          <div className={styles.imageBlock}>
            <img src={card.img} />
          </div>

          <CardBody className={styles.bodys}>
            <CardTitle tag="h5" className={styles.cardTitles}>
              {card.name}
            </CardTitle>

            <CardText className={styles.cardTexts} >{card.description}</CardText>
            <CardText className={styles.cardTexts}>{card.price}</CardText>
          </CardBody>
          <CardFooter className={styles.cardFooters}>
            {foo() ? (
              <Link href={"/basket"}>
                <a>
                  <Button color="info" className={styles.btns}>{t("common:goToBasket ")}</Button>
                </a>
              </Link>
            ) : (
              <a>
                <Button color="warning" onClick={() => addToBasket()} className={styles.btns}>
                {t("common:addToBasket")}
                </Button>
              </a>
            )}
            <Button color="success" className={styles.btns} onClick={() => navigate.push("/contactUs")} >{t("common:contact")}</Button>
          </CardFooter>
        </Card>
      )}{" "}
    </div>
  );
};
export default Id;
