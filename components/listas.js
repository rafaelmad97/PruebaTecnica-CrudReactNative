import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  ListItem,
  Text,
} from "@react-native-material/core";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FormularioUsuario from "./FormularioUsuario";

export default function ListasComponent() {
  const [formDialog, setFormDialog] = useState(false);
  const [DialogConfirmDelete, setDialogConfirmDelete] = useState(false);
  const [User, setUser] = useState(undefined);
  const closeDialog = (event) => setFormDialog(false);

  const userContext = useContext(UserContext);
  const { users } = userContext;

  useEffect(() => {
    userContext.fetchUsers();
  }, []);

  const handleEditUsuario = (user) => {
    setUser(user);
    setFormDialog(true);
  };

  const handleSetDeleteAction = (user) => {
    setUser(user);
    setDialogConfirmDelete(true);
  };

  const handleDeleteUser = () => {
    userContext
      .eliminarUsuario(User.id)
      .then(() => {
        console.log("Usuario Eliminado"),
          setDialogConfirmDelete(false),
          setUser(undefined);
      })
      .finally(userContext.fetchUsers);
  };

  return (
    <>
      <Dialog visible={DialogConfirmDelete}>
        <DialogHeader title="Desea Confirmar esta Acción" />
        <DialogContent>
          <Text variant="body1">
            Se eliminará el usuario elegido, Proceda con cuidado
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            onPress={handleDeleteUser}
            color="primary"
            title="Eliminar Usuario"
          />
          <Button
            variant="text"
            onPress={() => setDialogConfirmDelete(false)}
            color="secondary"
            title="Cancelar"
          />
        </DialogActions>
      </Dialog>
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
              onLongPress={(event) => handleSetDeleteAction(user)}
            />
          </>
        ))}
      </View>
    </>
  );
}
