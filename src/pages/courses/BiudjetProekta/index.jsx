import React from 'react'
import c from './course.module.scss'
import lesson1 from './lesson1.mp4'
import lesson1sound from './lesson1sound.mp4'
import { Link } from 'react-router-dom'

const BiudjetProekta = () => {
  const [module, setModule] = React.useState(1)

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

  const handleTimeUpdate = () => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };

  const handleSeeked = () => {
    if (audioRef.current && videoRef.current) {
      audioRef.current.currentTime = videoRef.current.currentTime;
    }
  };


  React.useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('seeked', handleSeeked);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('seeked', handleSeeked);
      };
    }
  }, []);
  return (
    <>
      {
        module === 1 ?
          <div className={c.course}>
            <h2>1/6 О чем этот модуль</h2>
            <div className={c.lines}>
              <div className={c.active}>Текущий урок</div>
              <div onClick={() => setModule(2)}></div>
              <div onClick={() => setModule(3)}></div>
              <div onClick={() => setModule(4)}></div>
              <div onClick={() => setModule(5)}></div>
              <div onClick={() => setModule(6)}></div>
              <div onClick={() => setModule(7)}></div>
              <div onClick={() => setModule(8)}></div>
              <div onClick={() => setModule(9)}></div>
              <div onClick={() => setModule(10)}></div>
              <div onClick={() => setModule(7)}></div>
              <div onClick={() => setModule(8)}></div>
              <div onClick={() => setModule(9)}></div>
              <div onClick={() => setModule(10)}></div>
            </div>

            <video
              ref={videoRef}
              controls
              onPlay={handlePlay}
              onPause={handlePause}
            >
              <source src={module === 1 ? lesson1 : ''} />
            </video>

            <audio ref={audioRef}>
              <source src={lesson1sound} />
            </audio>

            <p>
              <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
            </p>
            <p>
              Презентация доступна <Link to={'https://drive.google.com/file/d/1T-tGFJFiEjp6xlvuUokbJHDLDDDbhDhz/view'}>по ссылке</Link>
            </p>

            {
              module > 1 ?
                <button
                  onClick={() => {
                    setModule(module - 1)
                  }}
                >
                  Предыдущий урок
                </button> :
                ''
            }

            <button
              onClick={() => {
                setModule(module + 1)
              }}
            >
              Следующий урок
            </button>
          </div> :
          module === 2 ?
            <div className={c.course}>
              <h2>2/6 Разработка бюджета</h2>
              <div className={c.lines}>
                <div onClick={() => setModule(1)}></div>
                <div className={c.active}>Текущий урок</div>
                <div onClick={() => setModule(3)}></div>
                <div onClick={() => setModule(4)}></div>
                <div onClick={() => setModule(5)}></div>
                <div onClick={() => setModule(6)}></div>
                <div onClick={() => setModule(7)}></div>
                <div onClick={() => setModule(8)}></div>
                <div onClick={() => setModule(9)}></div>
                <div onClick={() => setModule(10)}></div>
              </div>

              <video
                ref={videoRef}
                controls
                onPlay={handlePlay}
                onPause={handlePause}
              >
                <source src={module === 1 ? lesson1 : ''} />
              </video>

              <audio ref={audioRef}>
                <source src={lesson1sound} />
              </audio>

              <p>
                <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
              </p>
              <p>
                Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
              </p>

              {
                module > 1 ?
                  <button
                    onClick={() => {
                      setModule(module - 1)
                    }}
                  >
                    Предыдущий урок
                  </button> :
                  ''
              }

              <button
                onClick={() => {
                  setModule(module + 1)
                }}
              >
                Следующий урок
              </button>
            </div> :
            module === 3 ?
              <div className={c.course}>
                <h2>3/6 Смета проекта</h2>
                <div className={c.lines}>
                  <div onClick={() => setModule(1)}></div>
                  <div onClick={() => setModule(2)}></div>
                  <div className={c.active}>Текущий урок</div>
                  <div onClick={() => setModule(4)}></div>
                  <div onClick={() => setModule(5)}></div>
                  <div onClick={() => setModule(6)}></div>
                  <div onClick={() => setModule(7)}></div>
                  <div onClick={() => setModule(8)}></div>
                  <div onClick={() => setModule(9)}></div>
                  <div onClick={() => setModule(10)}></div>
                </div>

                <video
                  ref={videoRef}
                  controls
                  onPlay={handlePlay}
                  onPause={handlePause}
                >
                  <source src={module === 1 ? lesson1 : ''} />
                </video>

                <audio ref={audioRef}>
                  <source src={lesson1sound} />
                </audio>

                <p>
                  <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                </p>
                <p>
                  Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                </p>

                {
                  module > 1 ?
                    <button
                      onClick={() => {
                        setModule(module - 1)
                      }}
                    >
                      Предыдущий урок
                    </button> :
                    ''
                }

                <button
                  onClick={() => {
                    setModule(module + 1)
                  }}
                >
                  Следующий урок
                </button>
              </div> :
              module === 4 ?
                <div className={c.course}>
                  <h2>4/6 Расходы проекта</h2>
                  <div className={c.lines}>
                    <div onClick={() => setModule(1)}></div>
                    <div onClick={() => setModule(2)}></div>
                    <div onClick={() => setModule(3)}></div>
                    <div className={c.active}>Текущий урок</div>
                    <div onClick={() => setModule(5)}></div>
                    <div onClick={() => setModule(6)}></div>
                    <div onClick={() => setModule(7)}></div>
                    <div onClick={() => setModule(8)}></div>
                    <div onClick={() => setModule(9)}></div>
                    <div onClick={() => setModule(10)}></div>
                  </div>

                  <video
                    ref={videoRef}
                    controls
                    onPlay={handlePlay}
                    onPause={handlePause}
                  >
                    <source src={module === 1 ? lesson1 : ''} />
                  </video>

                  <audio ref={audioRef}>
                    <source src={lesson1sound} />
                  </audio>

                  <p>
                    <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                  </p>
                  <p>
                    Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                  </p>

                  {
                    module > 1 ?
                      <button
                        onClick={() => {
                          setModule(module - 1)
                        }}
                      >
                        Предыдущий урок
                      </button> :
                      ''
                  }

                  <button
                    onClick={() => {
                      setModule(module + 1)
                    }}
                  >
                    Следующий урок
                  </button>
                </div> :
                module === 5 ?
                  <div className={c.course}>
                    <h2>5/6 Финансовый план</h2>
                    <div className={c.lines}>
                      <div onClick={() => setModule(1)}></div>
                      <div onClick={() => setModule(2)}></div>
                      <div onClick={() => setModule(3)}></div>
                      <div onClick={() => setModule(4)}></div>
                      <div className={c.active}>Текущий урок</div>
                      <div onClick={() => setModule(6)}></div>
                      <div onClick={() => setModule(7)}></div>
                      <div onClick={() => setModule(8)}></div>
                      <div onClick={() => setModule(9)}></div>
                      <div onClick={() => setModule(10)}></div>
                    </div>

                    <video
                      ref={videoRef}
                      controls
                      onPlay={handlePlay}
                      onPause={handlePause}
                    >
                      <source src={module === 1 ? lesson1 : ''} />
                    </video>

                    <audio ref={audioRef}>
                      <source src={lesson1sound} />
                    </audio>

                    <p>
                      <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                    </p>
                    <p>
                      Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                    </p>

                    {
                      module > 1 ?
                        <button
                          onClick={() => {
                            setModule(module - 1)
                          }}
                        >
                          Предыдущий урок
                        </button> :
                        ''
                    }

                    <button
                      onClick={() => {
                        setModule(module + 1)
                      }}
                    >
                      Следующий урок
                    </button>
                  </div> :
                  module === 6 ?
                    <div className={c.course}>
                      <h2>6/6 Технико-экономическое обоснование проекта</h2>
                      <div className={c.lines}>
                        <div onClick={() => setModule(1)}></div>
                        <div onClick={() => setModule(2)}></div>
                        <div onClick={() => setModule(3)}></div>
                        <div onClick={() => setModule(4)}></div>
                        <div onClick={() => setModule(5)}></div>
                        <div className={c.active}>Текущий урок</div>
                        <div onClick={() => setModule(7)}></div>
                        <div onClick={() => setModule(8)}></div>
                        <div onClick={() => setModule(9)}></div>
                        <div onClick={() => setModule(10)}></div>
                      </div>

                      <video
                        ref={videoRef}
                        controls
                        onPlay={handlePlay}
                        onPause={handlePause}
                      >
                        <source src={module === 1 ? lesson1 : ''} />
                      </video>

                      <audio ref={audioRef}>
                        <source src={lesson1sound} />
                      </audio>

                      <p>
                        <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                      </p>
                      <p>
                        Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                      </p>

                      {
                        module > 1 ?
                          <button
                            onClick={() => {
                              setModule(module - 1)
                            }}
                          >
                            Предыдущий урок
                          </button> :
                          ''
                      }

                      <button
                        onClick={() => {
                          setModule(module + 1)
                        }}
                      >
                        Следующий урок
                      </button>
                    </div> :
                    module === 7 ?
                    <div className={c.course}>
                      <h2>7/6 Отдача некоммерческих ИТ-проектов</h2>
                      <div className={c.lines}>
                        <div onClick={() => setModule(1)}></div>
                        <div onClick={() => setModule(2)}></div>
                        <div onClick={() => setModule(3)}></div>
                        <div onClick={() => setModule(4)}></div>
                        <div onClick={() => setModule(5)}></div>
                        <div onClick={() => setModule(6)}></div>
                        <div className={c.active}>Текущий урок</div>
                        <div onClick={() => setModule(8)}></div>
                        <div onClick={() => setModule(9)}></div>
                        <div onClick={() => setModule(10)}></div>
                      </div>

                      <video
                        ref={videoRef}
                        controls
                        onPlay={handlePlay}
                        onPause={handlePause}
                      >
                        <source src={module === 1 ? lesson1 : ''} />
                      </video>

                      <audio ref={audioRef}>
                        <source src={lesson1sound} />
                      </audio>

                      <p>
                        <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                      </p>
                      <p>
                        Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                      </p>

                      {
                        module > 1 ?
                          <button
                            onClick={() => {
                              setModule(module - 1)
                            }}
                          >
                            Предыдущий урок
                          </button> :
                          ''
                      }

                      <button
                        onClick={() => {
                          setModule(module + 1)
                        }}
                      >
                        Следующий урок
                      </button>
                    </div> :
                    module === 8 ?
                    <div className={c.course}>
                      <h2>8/6 Показатели экономической эффективности</h2>
                      <div className={c.lines}>
                        <div onClick={() => setModule(1)}></div>
                        <div onClick={() => setModule(2)}></div>
                        <div onClick={() => setModule(3)}></div>
                        <div onClick={() => setModule(4)}></div>
                        <div onClick={() => setModule(5)}></div>
                        <div onClick={() => setModule(6)}></div>
                        <div onClick={() => setModule(7)}></div>
                        <div className={c.active}>Текущий урок</div>
                        <div onClick={() => setModule(9)}></div>
                        <div onClick={() => setModule(10)}></div>
                      </div>

                      <video
                        ref={videoRef}
                        controls
                        onPlay={handlePlay}
                        onPause={handlePause}
                      >
                        <source src={module === 1 ? lesson1 : ''} />
                      </video>

                      <audio ref={audioRef}>
                        <source src={lesson1sound} />
                      </audio>

                      <p>
                        <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                      </p>
                      <p>
                        Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                      </p>

                      {
                        module > 1 ?
                          <button
                            onClick={() => {
                              setModule(module - 1)
                            }}
                          >
                            Предыдущий урок
                          </button> :
                          ''
                      }

                      <button
                        onClick={() => {
                          setModule(module + 1)
                        }}
                      >
                        Следующий урок
                      </button>
                    </div> :
                    module === 9 ?
                    <div className={c.course}>
                      <h2>9/6 Продуктовые метрики</h2>
                      <div className={c.lines}>
                        <div onClick={() => setModule(1)}></div>
                        <div onClick={() => setModule(2)}></div>
                        <div onClick={() => setModule(3)}></div>
                        <div onClick={() => setModule(4)}></div>
                        <div onClick={() => setModule(5)}></div>
                        <div onClick={() => setModule(6)}></div>
                        <div onClick={() => setModule(7)}></div>
                        <div onClick={() => setModule(8)}></div>
                        <div className={c.active}>Текущий урок</div>
                        <div onClick={() => setModule(10)}></div>
                      </div>

                      <video
                        ref={videoRef}
                        controls
                        onPlay={handlePlay}
                        onPause={handlePause}
                      >
                        <source src={module === 1 ? lesson1 : ''} />
                      </video>

                      <audio ref={audioRef}>
                        <source src={lesson1sound} />
                      </audio>

                      <p>
                        <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                      </p>
                      <p>
                        Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                      </p>

                      {
                        module > 1 ?
                          <button
                            onClick={() => {
                              setModule(module - 1)
                            }}
                          >
                            Предыдущий урок
                          </button> :
                          ''
                      }

                      <button
                        onClick={() => {
                          setModule(module + 1)
                        }}
                      >
                        Следующий урок
                      </button>
                    </div> :
                    module === 10 ?
                    <div className={c.course}>
                      <h2>10/6 Продуктовые метрики</h2>
                      <div className={c.lines}>
                        <div onClick={() => setModule(1)}></div>
                        <div onClick={() => setModule(2)}></div>
                        <div onClick={() => setModule(3)}></div>
                        <div onClick={() => setModule(4)}></div>
                        <div onClick={() => setModule(5)}></div>
                        <div onClick={() => setModule(6)}></div>
                        <div onClick={() => setModule(7)}></div>
                        <div onClick={() => setModule(8)}></div>
                        <div onClick={() => setModule(9)}></div>
                        <div className={c.active}>Текущий урок</div>
                      </div>

                      <video
                        ref={videoRef}
                        controls
                        onPlay={handlePlay}
                        onPause={handlePause}
                      >
                        <source src={module === 1 ? lesson1 : ''} />
                      </video>

                      <audio ref={audioRef}>
                        <source src={lesson1sound} />
                      </audio>

                      <p>
                        <b>Спикер:</b> Ольга Смирнова — директор проектов, руководитель офиса управления проектами «СКБ Контур», в прошлом — директор проектов в Western Union (Денвер, США)
                      </p>
                      <p>
                        Презентация доступна <Link to={'https://drive.google.com/file/d/19_qI1R5n0VIQRPX_OPdmNPOzYsqaafoW/view'}>по ссылке</Link>
                      </p>

                      {
                        module > 1 ?
                          <button
                            onClick={() => {
                              setModule(module - 1)
                            }}
                          >
                            Предыдущий урок
                          </button> :
                          ''
                      }

                      <button
                        onClick={() => {
                          setModule(module + 1)
                        }}
                      >
                        Следующий урок
                      </button>
                    </div> :
                    null
      }
    </>
  )
}

export default BiudjetProekta