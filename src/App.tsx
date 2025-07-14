import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme } from '@admiral-ds/react-ui';
import { TasksPage, TaskDetailsPage } from './pages';

import './App.css'

function App() {
  return (
    <Theme>
      <Router basename="/task-manager">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/task/:id" element={<TaskDetailsPage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
