//styled component library for styling
//بتكون خاصه بالكبموبنت بتاعها فقط
//احسن حاجه فيها كمان ان لما تستخدم الكومبونت تقدر تحط propsعليه عادي كأنه عنصر html عادي
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

//استايل ل component
const StyledApp = styled.main`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp onClick={() => console.log("parent")}>
        {/* as=>عشان اخلي الايلمنت دا يتحول للعنصر دا فغلا */}
        <Heading as="h1">The wild oasis</Heading>
        <Heading as="h2">check in and out</Heading>
        <Button onClick={() => console.log("check in ")}>check in</Button>
        <Button onClick={() => console.log("check out")}>check out</Button>

        <Heading as="h3">form</Heading>
        <Input type="number" placeholder="number of guests" />
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
