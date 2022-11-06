import axios from "axios"
import Link from "next/link"
import { forwardRef, useEffect, useState } from "react"
import CardComponent from "../../../src/components/cardComponent"
import styles from "../../../styles/Gadjet.module.css"

export async function getServerSideProps(context) {
  const { name } = context.params
  return {
    props: { name },
  }
}

const Gadjet = forwardRef(({ name },ref) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/gadjetGet/${name}`)
      .then((res) => {
        setLoading(false)
        return setProduct(res.data)
      })
  }, [])

  return (
    <div className={styles.wrapper} ref={ref}>
      {loading ?
        < div className={styles.loader}>
          <span>Loading...</span>
        </div>
        :
        product.map((item,index) => {
          return  index != 0 && 
          <CardComponent product={item} key={item._id} name ={name} />
        })
      }

    </div>

  )
})
export default Gadjet