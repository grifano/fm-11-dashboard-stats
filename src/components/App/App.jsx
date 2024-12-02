import Dashboard from "../Dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import Container from "../Container/Container";
import { Route, Routes } from "react-router-dom";
import NoData from "../NoData/NoData";

function App() {
  return (
    <Container>
      <Routes>
        {/* <Route path="/daily" element={<Dashboard dataset="daily" />} />
        <Route path="/weekly" element={<Dashboard dataset="weekly" />} /> */}
        <Route path="/" element={<Navigate to="/daily" replace />} />
        <Route path="/:dashobardName" element={<Dashboard />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </Container>
  );
}

export default App;
