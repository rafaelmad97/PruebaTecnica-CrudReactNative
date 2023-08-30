import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Box, ListItem, Text } from "@react-native-material/core";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListasComponent() {
  const userContext = useContext(UserContext);
  const { users } = userContext;

  useEffect(() => {
    userContext.fetchUsers();
  }, []);

  return (
    <>
      <View>
        {users.map((user) => (
          <ListItem
            title={`${user.name} ${user.lastname}`}
            secondaryText={`${user.username}`}
            trailing={(props) => (
              <MaterialCommunityIcons name="account-circle" {...props} />
            )}
          />
        ))}
      </View>
    </>
  );
}
