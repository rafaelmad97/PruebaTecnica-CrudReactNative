import {
  TextInput,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
} from "@react-native-material/core";
import { View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export default function FormularioUsuario(props) {
  const userContext = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.userdata !== undefined) {
      setNombre(props.userdata.name);
      setApellido(props.userdata.lastname);
      setEmail(props.userdata.email);
      setUsername(props.userdata.username);
      setPassword(props.userdata.password);
    }
  }, [
    setNombre,
    setApellido,
    setEmail,
    setUsername,
    setPassword,
    props.userdata !== undefined,
  ]);

  const handleAgregarUsuario = () => {
    const userdata = {
      id: 0,
      name: nombre,
      lastname: apellido,
      email,
      username,
      password,
    };
    userContext
      .agregarUsuario(userdata)
      .then(() => {
        console.log("Usuario Agregado");
        handleCleanCampos();
        props.closeDialog();
      })
      .finally(userContext.fetchUsers);
  };

  const handleUpdateUsuario = () => {
    const userdata = {
      id: props.userdata.id,
      name: nombre,
      lastname: apellido,
      email,
      username,
      password,
    };
    userContext
      .actualizarUsuario(props.userdata.id, userdata)
      .then(() => {
        console.log("Usuario Actualizado");
        handleCleanCampos();
        props.closeDialog();
      })
      .finally(userContext.fetchUsers);
  };

  const handleCleanCampos = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <Dialog visible={props.formDialog}>
      <DialogHeader title="Dialogo" />
      <DialogContent>
        <View>
          <TextInput
            label="Nombres"
            variant="standard"
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
          />
          <TextInput
            label="Apellidos"
            variant="standard"
            onChange={(event) => setApellido(event.target.value)}
            value={apellido}
          />
          <TextInput
            label="Email"
            variant="standard"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <TextInput
            label="Nombre de Usuario"
            variant="standard"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <TextInput
            label="Contraseña"
            variant="standard"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            secureTextEntry
          />
        </View>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          onPress={
            props.userdata !== undefined
              ? handleUpdateUsuario
              : handleAgregarUsuario
          }
          color="primary"
          title={
            props.userdata !== undefined
              ? "Actualizar Usuario"
              : "Crear Usuario"
          }
        />
        <Button
          variant="text"
          onPress={props.closeDialog}
          color="secondary"
          title="close"
        />
      </DialogActions>
    </Dialog>
  );
}
