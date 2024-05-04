import './App.css';
import './index.css'
import Navbar from './components/NavBar';
import Home from './home/Home';
import Tasks from './tasks/Tasks';
import DaySchedule from './day-schedule/DaySchedule';
import Calendar from './calendar/Calendar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/day-schedule" element={<DaySchedule />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
