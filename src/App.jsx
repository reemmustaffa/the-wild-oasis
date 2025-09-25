//styled component library for styling
//بتكون خاصه بالكبموبنت بتاعها فقط
//احسن حاجه فيها كمان ان لما تستخدم الكومبونت تقدر تحط propsعليه عادي كأنه عنصر html عادي
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  background-color: red;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

//استايل ل component
const StyledApp = styled.main`
  background-color: red;
  padding: 2rem;
`;
function App() {
  return (
    <StyledApp onClick={() => console.log("parent")}>
      <H1>The wild oasis</H1>
      <Button onClick={() => console.log("check in ")}>check in</Button>
      <Button onClick={() => console.log("check out")}>check out</Button>
      <Input type="number" placeholder="number of guests" />
    </StyledApp>
  );
}

export default App;
