import { Fragment, useEffect, useState } from 'react'
import { getDigitalRoot } from './DigitalRoot.utils'

const title = {
  backgroundColor: '#283739',
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  fontSize: '2.5rem',
  color: '#e0e0e0',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
}

const entry = {
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  fontSize: '1.5rem',
  color: 'rgba(44, 93, 99, 1)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
}

const result = {
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: 'rgba(162, 193, 28, 1)',
}

function Home() {
  const [value, setValue] = useState('')
  const [digitalRoot, setDigitalRoot] = useState(0)

  useEffect(() => {
    setDigitalRoot(getDigitalRoot(value))
  }, [value])

  return (
    <Fragment>
      <h1 style={title}>Digital Root</h1>
      <textarea
        style={entry}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div style={result}>{digitalRoot}</div>
    </Fragment>
  )
}

export default Home
