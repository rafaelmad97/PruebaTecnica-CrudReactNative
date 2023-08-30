import { FAB, Provider } from "@react-native-material/core";
import ListasComponents from "../components/listas";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { View } from "react-native";
import FormularioUsuario from "../components/FormularioUsuario";

function Home() {
  const [formDialog, setFormDialog] = useState(false);
  const closeDialog = (event) => setFormDialog(false);
  const openDialog = (event) => setFormDialog(true);

  return (
    <>
      <FormularioUsuario
        formDialog={formDialog}
        closeDialog={closeDialog}
        userdata={undefined}
      />
      <ListasComponents />
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          padding: "1.4em",
        }}
      >
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          style={{ width: "auto" }}
          onPress={openDialog}
        />
      </View>
    </>
  );
}

export default function Homepage() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}
