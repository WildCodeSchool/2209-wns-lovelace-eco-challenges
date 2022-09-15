import styled from "styled-components";
import { baseTitleStyles } from "../styles/base-styles";

export const SectionTitle = styled.h2`
  ${baseTitleStyles}
  font-size: 28px;
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;
