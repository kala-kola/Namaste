import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import App from './App'
import store from '../store'
import { fetchAsanas } from '../actions'

jest.mock('../actions')

fetchAsanas.mockImplementation(() => () => {})

test('page header includes Sun Salutation', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
  const heading = screen.getByRole('heading')
  screen.debug()
  expect(heading.innerHTML).toMatch(/Sun Salutation/)
})

test.skip('renders an <img> for each asana', () => {
  const fruits = ['orange', 'persimmons', 'kiwi fruit']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ fruits }))

  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(12)
})

test.skip('dispatches fetchAsanas action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchAsanas).toHaveBeenCalled()
})
