import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Body from '../components/Body/Body';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

it('renders body without crashing', () => {
  const componentBody =  renderer
  .create(<BrowserRouter><Body/></BrowserRouter>)
  .toJSON();
expect(componentBody).toMatchSnapshot();
  //expect(componentBody.contains(<Body/>)).toEqual(true);
});


//The following comment is a code example about testing CSS Transitions

/*

interface fadeProps {
 in: boolean
}

const Fade : React.FC<fadeProps> = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} timeout={300} classNames="fade">
      {children}
    </CSSTransition>
  )
}

interface hiddenMesageProps {
  initialShow: boolean
}

interface hiddenMessageState {
  show: boolean
}

class HiddenMessage extends React.Component<hiddenMesageProps,hiddenMessageState> {
  state : hiddenMessageState = { show: this.props.initialShow || false }
  
  toggle = () => {
    this.setState(({ show }) => ({ show: !show }))
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <Fade in={this.state.show}>
          <div>Hello world</div>
        </Fade>
      </div>
    )
  }
}


afterEach(cleanup)

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children)
  const FakeCSSTransition = jest.fn(props =>
    props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  )
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition }
})

test('you can mock things with jest.mock', () => {
  const { getByText, queryByText } = render(
    <Body />
  )
  expect(getByText('Hello world')).toBeTruthy() // we just care it exists
  // hide the message
  fireEvent.click(getByText('Toggle'))
  // in the real world, the CSSTransition component would take some time
  // before finishing the animation which would actually hide the message.
  // So we've mocked it out for our tests to make it happen instantly
  expect(queryByText('Hello World')).toBeNull() // we just care it doesn't exist
})

*/