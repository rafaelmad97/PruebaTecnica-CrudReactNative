import { AppBar } from "@react-native-material/core";
import Homepage from "./pages/homepage";
import { View } from "react-native";
import UsersState from "./context/userContext";

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
      <AppBar title="Listado de Usuarios" />
      <UsersState>
        <Homepage />
      </UsersState>
    </View>
  );
}
