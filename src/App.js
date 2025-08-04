import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Box2 = styled(Box)`
  background-color: red;
`;

const Text = styled.span`
  color: ${(props) => props.textColor};
  span {
    color: blue;
    &:hover {
      color: red;
    }
  }
`;

function App() {
  return (
    <>
      <Box>
        <Text textColor="black">
          asdf
          <span>this is span</span>
        </Text>
      </Box>
      <Box2></Box2>
    </>
  );
}

export default App;
