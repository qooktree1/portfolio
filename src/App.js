import './App.css'
import Navbar from "./molecules/Navbar/Navbar"

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  )
}

const MIN_DURATION = 10
const body = document.querySelector("body")

function makeSnowflake(){
  const snowflake = document.createElement("div")
  const delay = Math.random() * 10
  const initialOpacity = Math.random()
  const duration = Math.random() * 20 + MIN_DURATION

  snowflake.classList.add("snowflake")
  snowflake.style.left = `${Math.random() * window.screen.width}px`
  snowflake.style.animationDelay = `${delay}s`
  snowflake.style.opacity = initialOpacity
  snowflake.style.animation = `fall ${duration}s linear`

  body.appendChild(snowflake)
}

for (let index = 0; index < 50; index++) {
  setTimeout(makeSnowflake, 500 * index)
}