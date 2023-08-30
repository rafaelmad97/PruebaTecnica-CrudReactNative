import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  FAB,
  Provider,
  Text,
} from "@react-native-material/core";
import ListasComponents from "../components/listas";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { View } from "react-native";

function Home() {
  const [formDialog, setFormDialog] = useState(false);
  const openDialog = (event) => setFormDialog(true);
  const closeDialog = (event) => setFormDialog(false);

  return (
    <>
      <Dialog visible={formDialog}>
        <DialogHeader title="Dialogo" />
        <DialogContent>
          <Text variant="body1">Opened Dialog</Text>
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            onPress={closeDialog}
            color="primary"
            title="Action"
          />
          <Button
            variant="text"
            onPress={closeDialog}
            color="secondary"
            title="close"
          />
        </DialogActions>
      </Dialog>

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
