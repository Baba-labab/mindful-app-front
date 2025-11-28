import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import IsPrivate from './components/IsPrivate'
import AllExercises from './pages/AllExercises'
import SingleExercise from './pages/SingleExercise'
import AllReflections from './pages/AllReflections'
import SingleReflection from './pages/SingleReflection'
import CreateReflection from './pages/CreateReflection'
import UpdateReflection from './pages/UpdateReflection'
import FavExercises from './pages/FavExercises'
import Profile from './pages/Profile'
import Sources from './pages/Sources'
import NavbarPublic from './components/NavbarPublic'
import NavbarUser from './components/NavbarUser'
import IsAnon from './components/IsAnon'


function App() {


  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resources" element={<Sources />}></Route>

        {/* anon routes */}
        <Route element={<IsAnon />}>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>

        {/* private routes */}
        <Route element={<IsPrivate />}>
          <Route element={<NavbarUser />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/exercises" element={<AllExercises />}></Route>
            <Route path="/exercise/:id" element={<SingleExercise />}></Route>
            <Route path="/favourites" element={<FavExercises />}></Route>
            <Route path="/reflections" element={<AllReflections />}></Route>
            <Route path="/reflection/:id" element={<SingleReflection />}></Route>
            <Route path="/new-reflection" element={<CreateReflection />}></Route>
            <Route path="/update-reflection/:id" element={<UpdateReflection />}></Route>
          </Route>

        </Route>


        <Route path="*" element={<ErrorPage />}></Route>

      </Routes>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
