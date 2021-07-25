import React from "react";
// import slide from "./Slide";
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
        uri: "https://i.pinimg.com/236x/88/9f/0a/889f0ac220dc834b373c9e958041ae30--the-bakery-bakery-cafe.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>Bake and stay awake</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate("BakeryList")}>
            Swipe to continue
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
