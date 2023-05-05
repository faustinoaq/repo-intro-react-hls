import { notification } from "antd"
import { useEffect, useState } from "react"

const useFetch = (url, initialState = "", method = "get", body = "") => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(initialState)
  const [onError, setOnError] = useState(false)

  useEffect(() => {
    try {
      console.log()
      ;(async () => {
        setIsLoading(true)
        const info = await fetch(url, { method })
        const parseo = await info.json()
        if (parseo.length > 0) {
          setData(parseo)
          setIsLoading(false)
        }
      })()
    } catch (error) {
      alert("error")
      setOnError(true)
      notification.error({
        message: "Error",
        description: "Ocurrio un error",
        onClick: () => {
          console.log("Clicked")
        }
      })
    }
  }, [url])

  return {
    data,
    isLoading,
    onError
  }
}

export default useFetch
