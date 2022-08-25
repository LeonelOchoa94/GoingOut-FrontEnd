import './styles.css';
import 'animate.css';

export const Intro = () => {
  return (
    <>
      <div id='home'>
        <div className='d-flex container intro animate__animated animate__fadeInDown'>
          <div className='title-intro'>
            <h1>La nueva aplicación para reservar mesa en tu restaurant favorito!</h1>
          </div>
          <div className='image'>
            <img src='https://i.pinimg.com/564x/f0/05/82/f005824bc7b00975ac228a54117ba0fd.jpg' alt='' />
          </div>
        </div>
      </div>
    </>
  );
};
