import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/configs';
import Alert from '.';

const withProviders = (children: React.JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

it('it should match the snapshot and render', async () => {
  const { container } = render(withProviders(<Alert />));

  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();
});
