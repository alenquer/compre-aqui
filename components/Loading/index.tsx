import Image from 'next/image';
import { Container, ImageContent } from './styles';

export const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <ImageContent>
        <Image
          src={`/loading.svg`}
          width="100%"
          height="100%"
          layout="responsive"
          quality={80}
          priority
        />
      </ImageContent>
    </Container>
  );
};
