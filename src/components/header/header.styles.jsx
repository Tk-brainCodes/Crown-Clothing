import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionsStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: upper-case;
  font-size: 1em;
  font-weight: bold;
`;

export const HeaderStyledContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  padding: 25px;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsStyles}
`;
export const OptionDiv = styled.div`
  ${OptionsStyles}
`;
