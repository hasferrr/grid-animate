import { useRef } from "react"
import Button from "./Button"

function App() {
  const grid = Array.from({ length: 32 }, () => Array(32).fill(null))
  const gridRefs = useRef<HTMLDivElement[]>([])

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      {grid.map((arrRow, rowIndex) => (
        <div key={`grid-${rowIndex}`} className="flex">
          {arrRow.map((_, colIndex) => {
            const refIndex = rowIndex * grid[0].length + colIndex
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                ref={(el) => gridRefs.current[refIndex] = el!}
                className="bg-black"
                style={{ width: 16, height: 16 }}
              />
            )
          })}
        </div>
      ))}
      <Button gridRefs={gridRefs} />
    </div>
  )
}

export default App
