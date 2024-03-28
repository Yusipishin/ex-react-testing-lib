import { render, screen } from '@testing-library/react';
import App from './App';

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
});
