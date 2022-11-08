import './styles.css';
import 'animate.css';
import { Container } from '@mui/material';

export const Intro = () => {
  return (
    <>
      <div id='home'>
        <div className='animate__animated animate__fadeInDown'>
          <Container className='intro'>
            <div className='title-intro'>
              <h1>La nueva aplicación para reservar mesa en tu restaurant favorito!</h1>
            </div>
            <div className='image'>
              <img src='https://i.pinimg.com/564x/f0/05/82/f005824bc7b00975ac228a54117ba0fd.jpg' alt='' />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
