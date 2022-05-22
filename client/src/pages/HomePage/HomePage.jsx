import React from 'react'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="blue accent-1 cover">
      <div className="container">
        <div className="row home-page-content ">
          <h1 className='h-p-header'>
            Я отличный разработчик
          </h1>
        </div>
        <div className="row flex-container wrap">
          <div className="col w-3">
            <div className="card blue accent-1">
              <div className="card-image waves-effect waves-block waves-light pos-rel activator blue lighten-1 div-circle">
                <i className="material-icons medium">access_time</i>
              </div>
              <div className="card-content blue lighten-1">
                <span className="card-title activator grey-text text-darken-4 flex-container text-center items-center "><a className="activator">Быстро обучаемый</a><i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Быстро обучаемый<i className="material-icons right">close</i></span>
                <p>За короткое время освоил стек MERN достаточно, чтобы сделать CRUD-приложение и регистрацию с авторизацией.</p>
              </div>
            </div>
          </div>
          <div className="col w-3">
            <div className="card blue accent-1">
              <div className="card-image waves-effect waves-block waves-light pos-rel activator blue lighten-1 div-circle">
                <i className="material-icons medium">border_color</i>
              </div>
              <div className="card-content blue lighten-1">
                <span className="card-title activator grey-text text-darken-4 flex-container text-center items-center">
                  <a className="activator">
                    Готов к любой работе
                  </a>
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Готов к любой работе<i className="material-icons right">close</i></span>
                <p>Как не самый опытный готов выполнять самую нудную работу. Но не откажусь и от чего-то несколько выше своих навыков, так как <i className="material-icons right medium">arrow_forward</i></p>
              </div>
            </div>
          </div>
          <div className="col w-3">
            <div className="card blue accent-1">
              <div className="card-image waves-effect waves-block waves-light pos-rel activator blue lighten-1 div-circle">
                <i className="material-icons medium">show_chart</i>
              </div>
              <div className="card-content blue lighten-1">
                <span className="card-title activator grey-text text-darken-4 flex-container text-center items-center"><a className="activator">Готов учиться и развиваться</a><i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Готов учиться и развиваться<i className="material-icons right">close</i></span>
                <p>Готов изучать новое для себя, развиваться и справляться с трудностями, искать решения</p>
              </div>
            </div>
          </div>
          <div className="col w-3">
            <div className="card blue accent-1">
              <div className="card-image waves-effect waves-block waves-light pos-rel activator blue lighten-1 div-circle">
                <i className="material-icons medium">insert_emoticon</i>
              </div>
              <div className="card-content blue lighten-1">
                <span className="card-title activator grey-text text-darken-4 flex-container text-center items-center"><a className="activator">Неконфликтный и дружелюбный</a><i className="material-icons right">more_vert</i></span>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Неконфликтный и дружелюбный<i className="material-icons right">close</i></span>
                <p>Неконфликтный человек, могу найти общий язык с коллективом.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grey light-blue lighten-5">

        <div className="row post">
          <div className="col s6 grey darken-2 white-text">
            <div className="col s10 offset-s1">
              <p className="card-title-comfortaa date">
                03.09.2003 | Dogs
              </p>
              <h4 className="card-title-comfortaa">
                Собаки
              </h4>
              <p className='p-b-6'>
                Соба́ка (лат. Canis familiaris, или Canis lupus familiaris) — домашнее животное, одно из наиболее популярных (наряду с кошкой) животных-компаньонов.
                Домашняя собака была описана как самостоятельный биологический вид Canis familiaris Линнеем в 1758 году; в настоящее время данное научное название признаётся многими авторитетными организациями, такими как Американское общество маммалогов[2][3][4]. Некоторые источники (например, ITIS и MSW3) придерживаются альтернативной классификации, в рамках которой собака считается подвидом волка (Canis lupus familiaris)[5][6]. В русскоязычных письменных источниках слово «собака» в значении соответствующего животного встречается по крайней мере с 1475 года (начиная с грамоты князя Андрея Васильевича Меньшого Кириллову монастырю)[7][8].
              </p>
            </div>

          </div>
          <div className="col s6 cover">
            <img src="https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild6365-3766-4338-b431-616631373037__960.jpg" alt="" />
          </div>
        </div>
        <div className="row post">
          <div className="col s6 cover">
            <img src="https://ru.mypetandi.com/sites/g/files/adhwdz671/files/styles/paragraph_image/public/2020-04/dog-yawning-tongue.jpg?itok=uiaD9T-k" alt="" />
          </div>
          <div className="col s6 grey darken-2 white-text">
            <div className="col s10 offset-s1">
              <p className="card-title-comfortaa date">
                03.09.2003 | Dogs
              </p>
              <h4 className="card-title-comfortaa">
                Собаки
              </h4>
              <p className='p-b-6'>
                Соба́ка (лат. Canis familiaris, или Canis lupus familiaris) — домашнее животное, одно из наиболее популярных (наряду с кошкой) животных-компаньонов.
                Домашняя собака была описана как самостоятельный биологический вид Canis familiaris Линнеем в 1758 году; в настоящее время данное научное название признаётся многими авторитетными организациями, такими как Американское общество маммалогов[2][3][4]. Некоторые источники (например, ITIS и MSW3) придерживаются альтернативной классификации, в рамках которой собака считается подвидом волка (Canis lupus familiaris)[5][6]. В русскоязычных письменных источниках слово «собака» в значении соответствующего животного встречается по крайней мере с 1475 года (начиная с грамоты князя Андрея Васильевича Меньшого Кириллову монастырю)[7][8].
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage