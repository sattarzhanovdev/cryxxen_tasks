import React from 'react'
import c from './course.module.scss'
import vebinar from './1080p.mp4'
import sound from './audio_0.mp4'
import { Link, Navigate } from 'react-router-dom'

const KtoTakoiProektnyiManager = () => {
  const videoRef = React.useRef(null)
  const audioRef = React.useRef(null)

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className={c.course}>
      <h2>1/1 Вебинар</h2>
      <div className={c.lines}>
        <div className={c.active}>Текущий урок</div>
      </div>
      <video 
        ref={videoRef}  
        controls
        onPlay={handlePlay}
        onPause={handlePause}  
      >
        <source src={vebinar} />
      </video>

      <audio ref={audioRef}>
        <source src={sound}/>
      </audio>

      <p>
        <b>Спикер:</b> Надежда Меркоева
      </p>
      <p>
        Презентация доступна <Link to={'https://drive.google.com/file/d/1N2_mYtT3DvnQhjYsQRFpcA5Uizz32akX/view?usp=sharing'}>по ссылке</Link>
      </p>

      <button
        onClick={() => {
          Navigate('/courses/intstrumenty-proektnogo-managera/')
        }}
      >
        Следующий урок
      </button>
    </div>
  )
}

export default KtoTakoiProektnyiManager