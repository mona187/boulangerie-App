import React, { useState } from "react";

import {
  AuthTitle,
  AuthContainer,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "./styles";

import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("BakeryList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to sign up
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
