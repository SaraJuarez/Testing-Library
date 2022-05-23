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

  /*   function reduce(fraction) {
    let variable = 15;
    let prueba = variable % 2 === 0;5555555555555

    console.log(prueba);

    let cosa = fraction.reduce((previousValue, currentValue, index) => {
      console.log(previousValue);
      console.log(currentValue);
      console.log(index);
      debugger;
      let divisor = index + 1;
      if (previousValue % divisor === 0 && currentValue % divisor === 0) {
        console.log(fraction[0]);
        return previousValue / divisor;
      }
    });
  }

  reduce([60, 20]); */
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
