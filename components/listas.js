import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Box, ListItem, Text } from "@react-native-material/core";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FormularioUsuario from "./FormularioUsuario";

export default function ListasComponent() {
  const [formDialog, setFormDialog] = useState(false);
  const [User, setUser] = useState(undefined);
  const closeDialog = (event) => setFormDialog(false);
  const openDialog = (event) => setFormDialog(true);

  const userContext = useContext(UserContext);
  const { users } = userContext;

  useEffect(() => {
    userContext.fetchUsers();
  }, []);

  const handleEditUsuario = (user) => {
    setUser(user);
    setFormDialog(true);
  };
  return (
    <>
      <FormularioUsuario
        formDialog={formDialog}
        closeDialog={closeDialog}
        userdata={User}
        key={new Date().getTime()}
      />
      <View>
        {users.map((user) => (
          <>
            <ListItem
              title={`${user.name} ${user.lastname}`}
              secondaryText={`${user.username}`}
              trailing={(props) => (
                <MaterialCommunityIcons name="account-circle" {...props} />
              )}
              onPress={(event) => handleEditUsuario(user)}
            />
          </>
        ))}
      </View>
    </>
  );
}
