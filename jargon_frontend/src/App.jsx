import './App.css'
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import AI from "./pages/AI";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
            <div className='page'>
                <main className='main-content'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='/browse'
                            element={<Course />}
                        />
                        <Route
                            path='/my-movies'
                            element={<AI />}
                        />
                        <Route
                            path='/watchlist'
                            element={<Charts />}
                        />
                        <Route
                            path='/favourites-myreviews'
                            element={<Profile />}
                        />
                        
                    </Routes>
                </main>
                <NavBar />
            </div>
        </BrowserRouter>
  )
}

export default App
