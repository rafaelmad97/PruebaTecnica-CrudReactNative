import { AppBar } from "@react-native-material/core";
import Homepage from "./pages/homepage";
import { View } from "react-native";
import CarsState from "./context/carsContext";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        Wrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <AppBar title="Aplicacion de lista de carros" />

      <CarsState>
        <Homepage />
      </CarsState>
    </View>
  );
}
