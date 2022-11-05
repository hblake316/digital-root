import { Fragment, useEffect, useState } from 'react'
import { getDigitalRoot } from './DigitalRoot.utils'

function Home() {
  const [value, setValue] = useState('')
  const [digitalRoot, setDigitalRoot] = useState(0)

  useEffect(() => {
    setDigitalRoot(getDigitalRoot(value))
  }, [value])

  return (
    <Fragment>
      <h1>Digital Root</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>{digitalRoot}</div>
    </Fragment>
  )
}

export default Home
