import Dashboard from "../Dashboard/Dashboard";
import Container from "../Container/Container";
import { Route, Routes } from "react-router-dom";
import NoData from "../NoData/NoData";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/daily" element={<Dashboard dataset="daily" />} />
        <Route path="/weekly" element={<Dashboard dataset="weekly" />} />
        <Route path="/monthly" element={<Dashboard dataset="monthly" />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </Container>
  );
}

export default App;
