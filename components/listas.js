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
    >
      <View>
        <Text variant="body1">Temperaturas</Text>

        {data.map((weather) => (
          <ListItem
            title={weather.summary}
            secondaryText={`La temperatura es : ${weather.temperatureC} C | ${weather.temperatureF} F  fue tomada el ${weather.date}  `}
          />
        ))}
      </View>
      <View>
        <Text variant="body1">Lista de Carros</Text>

        {carsContext.cars.map((car) => (
          <ListItem title={car.name} />
        ))}
      </View>
    </Box>
  );
}
