import { useRef, useState } from 'react'

const Button = ({ gridRefs }: {
  gridRefs: React.MutableRefObject<HTMLDivElement[]>
}) => {
  const [, setRenderKey] = useState(0)
  const timeoutRefList = useRef<number[]>([])
  const delay = useRef(5)
  const index = useRef(0)
  const status = useRef(true)

  const triggerRender = () => {
    setRenderKey((prevKey) => prevKey + 1)
  }
  const reset = () => {
    stop()
    gridRefs.current.forEach((div) => div.className = 'bg-black')
    index.current = 0
  }
  const generate = () => {
    if (!status.current) {
      return stop()
    }
    if (index.current >= gridRefs.current.length) {
      return stop()
    }
    const div = gridRefs.current[index.current]
    index.current += 1
    div.className = 'bg-red-600'
    div.classList.add('border-red-900')
    div.classList.add('border-2')
    const timeoutId = setTimeout(generate, delay.current)
    timeoutRefList.current.push(timeoutId)
  }
  const stop = () => {
    timeoutRefList.current.forEach((timeoutId) => clearTimeout(timeoutId))
    timeoutRefList.current = []
  }
  const stopOne = () => {
    clearTimeout(timeoutRefList.current.pop())
  }
  const toggleDelay = () => {
    delay.current = delay.current === 5 ? 100 : 5
    triggerRender()
  }
  const toggleStatus = () => {
    status.current = !status.current
    triggerRender()
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={generate}>Generate Red</button>
      <button onClick={stop}>Stop All</button>
      <button onClick={stopOne}>Stop One</button>
      <button onClick={toggleDelay}>
        Current delay: {delay.current}ms
      </button>
      <button onClick={toggleStatus}>{
        'Status: ' + (status.current ? 'On' : 'Off')
      }</button>
    </div>
  )
}

export default Button
