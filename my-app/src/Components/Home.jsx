import React from "react";
import styled from "styled-components";
import Section from "./Section";
import InfoCard from "../carInfo.json";
// importing components and depancies
export default function Home() {
  const [cardInfo, setCardInfo] = React.useState(InfoCard);
  const infoSection = cardInfo.map((card) => {
    return <Section key={card.id} info={card} />;
  });
  return <Container>{infoSection}</Container>;
}
const Container = styled.div``;
