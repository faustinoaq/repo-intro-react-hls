import { key } from "./data/heros";
import { useEffect, useState } from "react";
import ImageComponent from "./components/image/ImageComponent";

const App = () => {
  const [valor, setValor] = useState([]);
  // const [active, setActive] = useState(false)

  // const activeHear = () => setActive(prevState => !prevState)

  const getGif = async () => {
    try {
      const data = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=spiderman&limit=25&offset=0&rating=g&lang=en`
      );
      const info = await data.json();
      // activeHear()
      info.data.length > 0 ? setValor(info.data) : null;
      console.log("INFO:", info);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  console.log("VALOR: ", valor);
  // console.log("VALOR: ", active)

  useEffect(() => {
    getGif();
    return () => {};
  }, []);

  return (
    <div>
      App
      {valor.map((dataImage) => {
        console.log("INFO map: ", dataImage);
        return (
          <ImageComponent
            key={dataImage.id}
            {...dataImage}
          />
        );
      })}
    </div>
  );
};

export default App;
