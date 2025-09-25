import styled, { css } from "styled-components";

//css=>to get syntax heighliting
// const test = css`
//   text-align: center;
// `;
const Heading = styled.h1`
  // عشان ارججع البروبس اللي انا كتبها
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  line-height:1.4
`;

export default Heading;
