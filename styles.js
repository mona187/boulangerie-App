import styled from "styled-components/native";

// export const HomeBackground = styled.ImageBackground`
//   width: 100%;
//   aspect-ratio: 1;
// `;
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  /* transform: scale(0.9); */
`;
export const OverLayContainter = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.3);
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 50px;
  text-align: center;
  font-weight: bold;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 22px;
`;
export const ButtonTime = styled.View`
  width: 165px;
  height: 35px;
  border-radius: 4px;
  background: #ffc0cb;

  color: ${(props) => props.theme.black};
  border: 0px transparent;
  text-align: center;
  margin: 5px;

  &:hover {
    background: #3b5998;
    opacity: 0.6;
  }
`;
