import React from 'react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Header from '../Pages/utilsComponents/Header/Header'
import TransitionGroupNonAuthUser from '../TransitionGroupNonAuthUser'

afterEach(cleanup)

const AppNavigation: React.FC = () => {

  return (
    <div>
      <Header />
      <TransitionGroupNonAuthUser />
    </div>
  )

}



// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),

  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

test('the rendering/navigating on pages for Non Authenticated Users', () => {
  const { container, getByText } = renderWithRouter(<AppNavigation />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('!Cualquiera puede programar!')).toBeTruthy()
  const leftClick = { button: 0 }
  fireEvent.click(getByText(/Iniciar Sesión/i), leftClick)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('!Continua tu aventura!')).toBeTruthy()
  fireEvent.click(getByText(/Resgístrate/i), leftClick)
  expect(getByText('!Empieza tu aventura aquí!')).toBeTruthy()

})

test('landing on a bad page', () => {
  const { getByText } = renderWithRouter(<AppNavigation />, {
    route: '/something-that-does-not-match',
  })
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Error Chavo: Path does not exist!')).toBeTruthy()
})

/*

test('rendering a component that uses withRouter', () => {
  const route = '/some-route'
  const { getByTestId } = renderWithRouter(<LocationDisplay />, { route })
  expect(getByTestId('location-display').textContent).toBe(route)
})

*/