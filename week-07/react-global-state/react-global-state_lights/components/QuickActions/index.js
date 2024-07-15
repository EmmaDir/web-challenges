import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onAllOff,
  onAllOn,
  allLightsOff,
  allLightsOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          onAllOff();
        }}
        disabled={allLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          onAllOn();
        }}
        disabled={allLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
