import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//import Home from "./components/Home";
//import Todo from "./components/Todo";
import TodoPage from "./pages/Todopage";
import CalendarPage from './pages/Calendar';
import TodayPage from './pages/Todaypage';
import HomePage from './pages/Homepage';

function App() {
  return (
    // <div className="App">
    //   <div className="home">
    //     <Home />
    //   </div>
    //   <div className="todo">
    //     <Todo />
    //   </div>
    // </div>
    // < TodoPage />
    <BrowserRouter>
    <Routes>
      <Route expect path="/" element={<HomePage />} />
      <Route expect path="/todo" element={<TodoPage />} />
      <Route expect path="/today" element={<TodayPage />} />
      <Route expect path="/calendar" element={<CalendarPage />} />  
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

