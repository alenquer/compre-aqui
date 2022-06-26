import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme';
import { StateProvider } from '../../contexts/StateManager';

interface IProps {
  children: React.ReactNode;
}

export const RenderWithProvider: React.FC<IProps> = ({ children }) => {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StateProvider>
  );
};
