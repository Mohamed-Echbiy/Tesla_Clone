import React from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [liTitel, setLiTitel] = React.useState([
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
  ]);
  const Lis = liTitel.map((li) => {
    return (
      <li key={li}>
        <a href="#">{li}</a>
      </li>
    );
  });
  const [burgerstate, setBurgerState] = React.useState(true);
  function toggelNav() {
    setBurgerState((prevstate) => {
      return !prevstate;
    });
  }
  return (
    <Container>
      <Logo>
        <img src="./images/logo.svg" alt="logo" />
      </Logo>

      <Link>
        <a href="#Model S">Model S</a>
        <a href="#Model 3">Model 3</a>
        <a href="#Model X">Model X</a>
        <a href="#Model Y">Model Y</a>
        <a href="#Solar Panels">Solar Panels</a>
        <a href="#Solar Roof">Solar Roof</a>
      </Link>
      <BurggerIcon className="Icons">
        <a href="#Accessories">shop</a>
        <a href="#">Account</a>
        <AiOutlineMenu onClick={toggelNav} />
      </BurggerIcon>
      <NavMenu show={burgerstate}>
        <CustomIcon>
          <AiOutlineClose onClick={toggelNav} />
        </CustomIcon>
        {Lis}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trad in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </NavMenu>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2;
  padding: 10px 0px;
}

`;
const Logo = styled.div`
  max-width: 100px;
`;
const Link = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    padding: 5px 10px;
  }
  a:hover {
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 25px;
  }
`;
const BurggerIcon = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 10px;
  gap: 20px;
  @media (max-width: 600px) {
    a {
      font-size: 14px;
    }
  }
  a {
    padding: 5px 10px;
  }
  a:hover {
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 25px;
  }
`;
const NavMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: 300px;
  top: 0%;
  z-index: 20;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
  right: ${(props) => (props.show === true ? "-100%" : "0%")};
  transition: 0.5s ease;
  li {
    padding: 20px 13px;
    position: relative;
    a {
      font-weight: 600;
    }
  }
  li::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0%;
    left: 0%;
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
  }
  li:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
const CustomIcon = styled.div`
  display: flex;
  padding-right: 15px;
  justify-content: end;
  padding: 10px 0px;
  margin-bottom: 15px;
`;
