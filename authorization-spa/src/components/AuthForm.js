import React from 'react'

const AuthForm = () => {
  return (
    <div className={styles.authWrapper}>
    <form onSubmit={handleSubmit}>
      {/* --------- form start --------- */}

      {/* <p className={styles.googleDescr}>
        Вы можете авторизироваться с помощью Google account:
      </p> */}

      {/* --------- google button--------- */}
      {/* <button type="button" onClick={googleSignIn} className={styles.google}>
        <img
          className={styles.googleIcon}
          src={googleIcon}
          alt="google-icon"
        />
        Google
      </button> */}
      {/* <p className={styles.authDescr}>
        Или зайти в приложение с помощью имейла и пароля, сперва
        зарегистрировавшись:
      </p> */}

      <p className={styles.authDescr}>
        Зайдите в приложение с помощью имейла и пароля, сперва
        зарегистрировавшись:
      </p>

      {typeRegister && (
        <>
          {/* --------- first name input --------- */}
          <label className={styles.label} htmlFor="name">
            Имя
          </label>

          <input
            className={styles.input}
            pattern="(^[A-Za-zА-Яа-яЁё]).{3,}"
            maxLength="20"
            id="name"
            type="text"
            placeholder="First name"
            name="firstName"
            value={firstName}
            onChange={handleInputFirstName}
            required
            autoFocus
          />

          {/* --------- last name input --------- */}
          <label className={styles.label} htmlFor="lastName">
            Фамилия
          </label>

          <input
            className={styles.input}
            pattern="(^[A-Za-zА-Яа-яЁё]).{3,}"
            maxLength="20"
            id="lastName"
            placeholder="Last name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleInputLastName}
            required
          />
        </>
      )}

      {/* --------- email input --------- */}
      <label className={styles.label} htmlFor="email">
        Электронная почта
      </label>

      <input
        id="email"
        className={styles.input}
        type="email"
        placeholder="Your@email.com"
        name="email"
        value={email}
        onChange={handleInputEmail}
        required
        autoFocus
      />

      {/* --------- password input --------- */}
      <label className={styles.label} htmlFor="password">
        Пароль
      </label>

      <input
        className={styles.input + ' ' + styles.inputPassword}
        placeholder="Пароль"
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={handleInputPassword}
        minLength="6"
        maxLength="15"
        required
      />

      {/* --------- buttons login/register --------- */}
      <div className={styles.authBtnWrapper}>
        <button className={styles.buttonLogin} type="submit">
          {typeRegister ? 'создать' : 'войти'}
        </button>
        <button
          className={styles.buttonRegister}
          type="button"
          onClick={handleTypeRegister}
        >
          {typeRegister ? 'аккаунт' : 'регистрация'}
        </button>
      </div>

      {/* --------- /form end --------- */}
    </form>
  </div>
  )
}

export default AuthForm
