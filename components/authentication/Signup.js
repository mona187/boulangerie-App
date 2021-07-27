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

//observer
import { observer } from "mobx-react";
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("BakeryList");
  };
  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
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
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to sign in
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);
