import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('APP TEST', () => {
    test('renders learn react link', () => {
      render(<App />);

      const helloWorldElement = screen.getByText(/hello world!/i)
      const btn = screen.getByRole('button')
      const input = screen.getByPlaceholderText(/input vfalue.../i)

      expect(helloWorldElement).toBeInTheDocument()
      expect(btn).toBeInTheDocument()
      expect(input).toMatchSnapshot()
  });

    // find -- для асинхронного кода
    // get -- 100% получение элемента
    // query -- доказать отсутствие

    test('renders learn react link', async() => {
      render(<App />);

      // const helloWorldElement = screen.queryByText(/hello142/i)
      // expect(helloWorldElement).toBeNull()

      const helloWorldElement = await screen.findByText(/data/i)
      expect(helloWorldElement).toBeInTheDocument()
      expect(helloWorldElement).toHaveStyle({color: 'red'})
  });

  test('CLICK EVENT', () => {
    render(<App />);

    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/input vfalue.../i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    fireEvent.input(input, {
      target: {value: '1234123'}
    })
    // userEvent близок к пользователю, обрабатывает события нажатия клавиш и тд.
    userEvent.type(input, '1234123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('1234123');
  });
});
