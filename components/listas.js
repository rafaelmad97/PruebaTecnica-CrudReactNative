import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Box, ListItem, Text } from "@react-native-material/core";
import { View } from "react-native";

export default function ListasComponent() {
  const [data, setData] = useState([]);
  const userContext = useContext(UserContext);
  const { users } = userContext;

  useEffect(() => {
    userContext.fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <ListItem
          title={`${user.name} ${user.lastname}`}
          secondaryText={`${user.username}`}
        />
      ))}
    </>
  );
}
