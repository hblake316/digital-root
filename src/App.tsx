import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './app/DigitalRoot/DigitalRootPage'
import NotFound from './app/NotFoundPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
