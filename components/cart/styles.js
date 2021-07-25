import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(FontAwesome)`
  color: ${(props) => props.theme.white};
  margin-right: 10px;
`;
