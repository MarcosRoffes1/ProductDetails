import "./home.css"
import Navbar from "../components/navbar/Navbar"
import Left from "../components/left/Left"
import Right from "../components/right/Right"

export default function Home ()  {
  return (
    <div className="home">
      <Navbar/>
      <div className="home-wrapper">
        <Left />
        <Right/>
      </div>
    </div>
  )
}

