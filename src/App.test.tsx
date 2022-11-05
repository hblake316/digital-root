import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { WrappedApp, App } from './App'

describe('App', () => {
  it('renders digital-root', () => {
    render(<WrappedApp />)
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('digital-root')
  })
  it('renders text field', () => {
    render(<WrappedApp />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('renders not found', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('NotFound')
  })
})
