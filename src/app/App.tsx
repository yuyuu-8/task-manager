import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { TasksPage, TaskDetailsPage } from "../pages";
import { LIGHT_THEME } from "@admiral-ds/react-ui";
import { TaskProvider } from "../shared/context";
import { ApiInfo } from "../widgets/api-info";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyle />
      <TaskProvider>
        <Router basename="/task-manager">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/task/new" element={<TaskDetailsPage />} />
            <Route path="/task/:id" element={<TaskDetailsPage />} />
          </Routes>
          <ApiInfo />
        </Router>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
