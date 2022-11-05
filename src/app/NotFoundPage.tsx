import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Fragment>
      <h1>NotFound</h1>
      <Link to="/">Go Home</Link>
    </Fragment>
  )
}

export default NotFound
