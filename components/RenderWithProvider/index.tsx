import { ThemeProvider } from 'styled-components';
import { theme } from '../../config/theme';

interface IProps {
  children: React.ReactNode;
}

export const RenderWithProvider: React.FC<IProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
