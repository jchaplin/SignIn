import "./styles.css"
import { Frame } from "framer"

export default function App() {
  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        style={{ borderRadius: 30, background: "red" }}
      >
        <Frame size={60} borderRadius={30} background="black" />
      </Frame>
    </div>
  )
}
