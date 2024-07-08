// import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";
import { StyledBox } from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";

const AlignedBoxes = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <AlignedBoxes>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      {/* <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack /> */}
      <StyledBox />
      <StyledBox $isBlack />
    </AlignedBoxes>
  );
}
