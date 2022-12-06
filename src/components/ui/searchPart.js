import styles from "../../../styles/SearchPart.module.css";
import { useState } from "react";
import axios from "axios";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useRouter } from "next/router";
import  useTranslation  from 'next-translate/useTranslation';

const SearchPart = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const {t} = useTranslation()

  const navigate = useRouter()

  const buttonList = [
    "iPhone",
    "Samsung",
    "Ipad",
    "Iphone 14 pro",
    "Watch",
    "13 Pro ",
    "iPhone 12",
    "Macbook",
    "Xiaomi",
  ];

  const Submit = async (e) => {
    e.preventDefault();
    try {
      if (searchValue) {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/searchGadjet/?search=${searchValue}`
        );
        console.log(response.data);
        response.data && setLoading(false);
        setSearchData(response.data);
        s;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const search = async (btn) => {
    setSearchValue(btn);
    setLoading(true);
    const response = await axios.get(
      `http://localhost:5000/api/searchGadjet/?search=${btn}`
    );
    response.data && setLoading(false);
    setSearchData(response.data);
  };
  const handleClick = (e) => {
    setSearchValue(e.target.value);
    if (!e.target.value.length) {
      setSearchData([]);
    }
  };

  return (
    <div className={styles.wrapper} id="1">
      <div className={styles.searchPart}>
        <p className={styles.text}>{t("common:lookAnything")}</p>

        <form onSubmit={Submit} style={{ display: "flex" }}>
          <input
            type="search"
            value={searchValue}
            placeholder="Search keyword"
            className={styles.input}
            onChange={handleClick}
          />
          {loading && (
            <div className={styles.dotSpinner}>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
              <div className={styles.dotSpinnerDot}></div>
            </div>
          )}
        </form>
      </div>

      {searchValue.length && searchData.length ? (
        <div className={styles.products}>
          {searchData.map((card) => {
            return (
              card.img.length > 100 && (
                <Card className={styles.cards} onClick={() => navigate.push(`/allProduct/${card.type}/${card._id}`)}>
                  <div className={styles.imageBlock}>
                    <img
                      src={card.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                  <CardBody className={styles.card_body}>
                    <CardTitle
                      tag="h5"
                      className={styles.cardTitle}
                    >
                      {card.name}
                    </CardTitle>
                    <CardText  className={styles.cardText1}>
                      {card.description}
                    </CardText>
                    <CardText  className={styles.cardText1}>
                      {card.price}
                    </CardText>
                  </CardBody>
                </Card>
              )
            );
          })}
        </div>
      ) : (
        <div className={styles.btnWrapper}>
          <div className={styles.innerBlock}>
            {buttonList.map((btn, i) => {
              return (
                <button
                  className={styles.btn}
                  key={i}
                  onClick={() => search(btn)}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchPart;
