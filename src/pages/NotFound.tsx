import { Link } from 'react-router'

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>That page doesn&apos;t exist.</p>
      <Link to="/">Go home</Link>
    </main>
  )
}

export default NotFound
