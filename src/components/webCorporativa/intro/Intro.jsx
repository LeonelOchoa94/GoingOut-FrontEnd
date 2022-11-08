import './styles.css';
import 'animate.css';
import { Container } from '@mui/material';
import { Example } from '../../../helpers/carousel/carousel';

export const Intro = () => {
  return (
    <>
      <div id='home'>
        <div className='animate__animated animate__fadeInDown'>
          <Container className='intro'>
            <Example />
          </Container>
        </div>
      </div>
    </>
  );
};
