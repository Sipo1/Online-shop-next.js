import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardBody, CardTitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import styles from "../../../styles/eachElement.module.css"

export async function getServerSideProps(context) {
  const { id, name } = context.params
  return {
    props: { name, id },
  }
}
const Id = ({ name, id }) => {
  const [element, setElement] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`http://localhost:5000/api/gadjetGet/${name}`)
      .then(res => {
        setLoading(false)
        setElement(res.data)
      })
  }, [])

  const card = element.find(item => item._id == id)
  return (<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    {loading ? < div className={styles.loader}>
      <span>Loading...</span>
    </div>
      :
      <Card
        style={{
          width: '30%',
          height: "auto"
        }}
      >
        <img
          src={card.img}
        />
        <CardBody>
          <CardTitle tag="h5" style={{ color: "black" }}>
            {card.name}
          </CardTitle>

          <CardText>
            {card.description}
          </CardText>
          <CardText>
            {card.price}
          </CardText>
        </CardBody>
      </Card>
    }   </div>
  )
}
export default Id