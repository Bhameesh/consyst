import styled from "styled-components";
import { Button } from "grommet";

export const StyledAdminWrapper = styled.div`
  display: grid;
  height: 85vh;

  grid-template-rows: auto 1fr;
  grid-template-columns: 300px 0px 1fr;
  grid-template-areas:
    "nav subnav header"
    "nav subnav main";
`;

export const StyledBackButton = styled(Button)`
  border-radius: 0px;
  border: 0px #227ff7;
  background: #227ff7;
  color: white;
`;

export const StyledSubmitButton = styled(Button)`
  border-radius: 0px;
  border: 0px #7d4cdb;
  background: #7d4cdb;
  color: white;
`;
