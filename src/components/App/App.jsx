import Dashboard from "../Dashboard/Dashboard";
import Container from "../Container/Container";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/daily" element={<Dashboard dataset="daily" />} />
        <Route path="/weekly" element={<Dashboard dataset="weekly" />} />
        <Route path="/monthly" element={<Dashboard dataset="monthly" />} />
      </Routes>
    </Container>
  );
}

export default App;
