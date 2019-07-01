import React from 'react';
import {  Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Header from '../components/Header/Header'
import Body from '../components/Body/Body'

afterEach(cleanup)

const Header_Body_Navigation : React.FC = () => {

    return(
        <div>
        <Header inCourse={true} />
        <Body/>
        
    </div>
    )
    
} 



// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(ui : any,
  {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),

} = {}
) 
  {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

test('full app rendering/navigating', () => {
  const { container, getByText } = renderWithRouter(<Header_Body_Navigation />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Aprender a progrmar es más fácil de lo que crees.')).toBeTruthy()
  const leftClick = { button: 0 }
  fireEvent.click(getByText(/About/i), leftClick)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText('Acerca de Programación Papita')).toBeTruthy()
  fireEvent.click(getByText(/Contact/i), leftClick)
  expect(getByText('Contáctanos Chavo!')).toBeTruthy()
  

})

test('landing on a bad page', () => {
  const { getByText } = renderWithRouter(<Header_Body_Navigation />, {
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