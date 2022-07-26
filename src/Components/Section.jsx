import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from "styled-components";

export default function Section({ info }) {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // const [scroll, setScroll] = React.useState(100);
  // function ScrollTo() {
  //   setScroll((prevHeight) => {
  //     return prevHeight + 100;
  //   });
  //   Window.ScrollTo(scroll);
  // }
  return (
    <Warp image={info.image} id={info.id}>
      <div data-aos="fade-up">
        <ItemText>
          <h1>{info.title}</h1>
          <p>{info.description}</p>
        </ItemText>
      </div>

      <ButtonWarpper>
        <div
          className="Btn-Container"
          data-aos={info.id === "Accessories" ? "none" : "fade-up"}
        >
          <Leftbutton>{info.leftBtnText}</Leftbutton>
          {info.hasOwnProperty("rightBtnText") && (
            <Rightbutton>{info.rightBtnText}</Rightbutton>
          )}
        </div>
      </ButtonWarpper>
      {/* <DownArrow src="./images/down-arrow.svg" onClick={ScrollTo} /> */}
    </Warp>
  );
}

//Styling components

const Warp = styled.div`
  height: 100vh;
  width: 100wh;
  background-image: ${(props) => `url('/images/${props.image}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    text-align: center;
  }
  h1 {
    margin-bottom: 15px;
    text-align: center;
  }
`;
const ButtonWarpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  padding: 20px 0px 7vh;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
`;
const Leftbutton = styled.div`
  padding: 15px;
  background-color: rgb(23, 26, 32, 0.8);
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  border-radius: 25px;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.8;
`;
const Rightbutton = styled(Leftbutton)`
  background-color: white;
  color: black;
`;
const bouncing = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(8px) translateX(-50%);
  }
  60% {
    transform: translateY(4px) translateX(-50%);
  }
`;
// const DownArrow = styled.img`
//   margin-top: 20px;
//   height: 40px;
//   position: absolute;
//   bottom: 0%;
//   left: 50%;
//   cursor: pointer;
//   animation: ${bouncing} 1.5s linear infinite;
// `;
