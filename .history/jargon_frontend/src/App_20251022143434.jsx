import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home_pages/Home";
import Course from "./course_pages/Course";
import AI from "./ai_pages/AI";
import Charts from "./charts_pages/Charts";
import Profile from "./profile_pages/Profile";

function App() {
  return (
    <BrowserRouter>
            <div className='page'>
                <main className='main-content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<AI />}
                        />
                        <Route
                            path='/home'
                            element={<Home />}
                        />
                        <Route
                            path='/course'
                            element={<Course />}
                        />
                        <Route
                            path='/ai'
                            element={<AI />}
                        />
                        <Route
                            path='/charts'
                            element={<Charts />}
                        />
                        <Route
                            path='/profile'
                            element={<Profile />}
                        />
                        
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
  )
}

export default App
