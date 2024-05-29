import ReactDOM from 'react-dom/client'
import "./style/style.css"
import Dashboard from '/src/pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import SidebarNav from './components/SidebarNav'
import RedirectToUserId from './utils/RedirectToUserId'
import Error from './pages/Error'
import Profile from './pages/Profile'

export const App = () => {
  return (
    <Router>
        <Header />
        <SidebarNav />
        <Routes>
          <Route path='/' element={<RedirectToUserId />} />
          <Route path='/user/:id' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/error' element={<Error />} />
        </Routes>
    </Router>
  );
}

// Rendu de l'application
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
