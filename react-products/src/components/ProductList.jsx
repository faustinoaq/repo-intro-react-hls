import useFetch from "../hooks/useFetch"
import { URL_API } from "../utils/constants"

const ProductList = () => {
  const { data, isLoading, onError } = useFetch(`${URL_API}/products`)

  console.log("DATA: ", data)
  return <div></div>
}

export default ProductList
