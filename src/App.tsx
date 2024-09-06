import { useRef } from "react"
import Button from "./Button"
import Grid from "./Grid"

function App() {
  const grid = Array.from({ length: 32 }, () => Array(32).fill(null))
  const gridRefs = useRef<HTMLDivElement[]>([])

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Grid grid={grid} gridRefs={gridRefs} />
      <Button gridRefs={gridRefs} />
    </div>
  )
}

export default App
