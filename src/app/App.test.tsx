import { render } from '@testing-library/react'

import { App } from './App'

describe('Render App', () => {
  test('render app', () => {
    render(<App />)
    expect(1).toBe(1)
  })
})
