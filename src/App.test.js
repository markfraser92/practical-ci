import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Counter from './Counter';
import Adapter from 'enzyme-adapter-react-16.1';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Increment/i);
  expect(linkElement).toBeInTheDocument();
});

describe('initial state', () => {
  it('renders counter component', () => {
    const counter = shallow(<Counter />);
    expect(counter.state().count).toBe(0);
  });
});

describe('should increment by 1', () => {
  it('should now be 1', () => {
    const counter = shallow(<Counter />);
    counter.find('.Counter-Increment').simulate('click');
    expect(counter.state().count).toBe(1);
  });
});

describe('should decrement by 1', () => {
  it('should now be -1', () => {
    const counter = shallow(<Counter />);
    counter.find('.Counter-Decrement').simulate('click');
    expect(counter.state().count).toBe(-1);
  });
});
