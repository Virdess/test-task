import React from 'react'

const HomePage = () => {
  return (
    <>
      <h1 className="header-hp blue lighten-1 text-white">
        Тестовое задание.
      </h1>
      <div className="row">
        <div className="col s11 offset-s6">
          <div className="card blue-grey darken-1 ">
            <div className="card-content white-text">
              <span className="card-title">Приложение Для Тестового Задания</span>
              <p>
                Это приложение использует стэк MERN (MongoDB, Express.js, React.js, Node.js)
                Вы находитесь на странице регистрации/авторизации.
              </p>
            </div>
            <div className="card-action">
              <a>This is a link</a>
              <a>This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage