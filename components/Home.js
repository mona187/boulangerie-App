import React from "react";
import authStore from "../stores/authStore";
import Signpage from "../components/authentication/Signpage";
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
        uri: "https://www.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <ButtonStyling onPress={() => authStore.signout()}>
            signout
          </ButtonStyling>

          <Title>Bake and stay awake</Title>
        </TopStyling>
        <BottomStyling>
          {/* <ButtonStyling onPress={() => navigation.navigate("Signin")}>
            Click to continue
          </ButtonStyling> */}
          <Signpage />
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
