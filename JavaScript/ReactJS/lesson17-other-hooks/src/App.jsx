import { Container } from "react-bootstrap";
import AppUseLayoutEffect from "./examples/AppUseLayoutEffect";
import AppUseMemo from "./examples/AppUseMemo";

const App = () => {
  return <Container className="mt-5">
  {/* <AppUseImperativeHandler /> */}
  {/* <AppUseLayoutEffect /> */}
  <AppUseMemo />
  </Container>
};

export default App;
