import React from "react";

//styles
import {
  HomeBackground,
  OverLayContainter,
  BottomStyling,
  ButtonStyling,
  TopStyling,
  Title,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://www.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>Bake and stay awake</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("BakeryList")}>
            Click to continue
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
