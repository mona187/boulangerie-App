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

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri: "https://oxitamins.com/wp-content/uploads/2021/04/somers_bakery-department-header.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>BAKE AND STAY AWAKE</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => alert("Take me to the bakeries")}>
            Swipe to continue
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
