import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../context/carsContext";
import { Box, ListItem, Text } from "@react-native-material/core";
import { View } from "react-native";

export default function ListasComponent() {
  const [data, setData] = useState([]);
  const carsContext = useContext(CarsContext);

  useEffect(() => {
    carsContext.testApi().then((data) => setData(data));
    carsContext.fetchCars();
  }, []);

  return (
    <Box
      style={{
        margin: "1em",
      }}
    ></Box>
  );
}
