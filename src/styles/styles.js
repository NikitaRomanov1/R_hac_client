import styled from "styled-components";
import background from "../images/background.jpg";
import themes from "./themes";
import { motion } from "framer-motion";
export const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  height: 120;
  padding: 0.5rem calc((100vw - 1000px) / 4);
  background: white;
  z-index: 820;
  border-bottom: 1px solid ${themes.colors.grey};
`;
export const StyledHome = styled.div`
  padding-top: 50px;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) center/cover no-repeat;
  background-size: 100%;
`;

export const StyledInput = styled.input`
  margin-right: 15px;
  width: 550px;
  height: 40px;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${themes.colors.grey};
  font-size: large;
  :placeholder {
    color: ${themes.colors.grey};
  }
  :focus {
    outline: none;
  }
`;
export const StyledButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: transparent;
  background-color: transparent;
`;
export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  border-top: 3px solid ${themes.colors.blue};
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 20px;
  :hover {
    cursor: pointer;
    background: ${themes.colors.grey};
  }
`;
export const StyledGrid = styled.div`
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

export const StyledLoader = styled(motion.div)`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: 15px solid ${themes.colors.blue};
`;
