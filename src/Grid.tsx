const Grid = ({ grid, gridRefs }: {
  grid: unknown[][]
  gridRefs: React.MutableRefObject<HTMLDivElement[]>
}) => {
  return (
    <div>
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
    </div>
  )
}

export default Grid
