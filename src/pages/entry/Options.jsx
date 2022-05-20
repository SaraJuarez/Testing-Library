import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
function Options(props) {
  const { optionType } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    getInfo();
  }, [optionType]);

  const getInfo = async () => {
    await axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}

export default Options;
