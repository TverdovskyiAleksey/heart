import React from "react";
import shortid from "shortid";
import style from "./Form.module.css";
const Form = () => {
  return (
    <div>
      <h2 className={style.title}>Заповніть форму</h2>
      <div>
        <button className={style.button}>Фіз. особа</button>
        <button className={style.button}>Юр. особа</button>
      </div>
      <form className={style.form}>
        <div style={{ position: "relative" }}>
          <div className={style.nameWrapper}>
            <label className={style.label}>
              <span>Ім'я</span>
              <input
                style={{ marginRight: "15px" }}
                className={style.input}
                id={shortid.generate()}
                type="text"
                name="firstName"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Ім'я може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Василь, Олексій тощо"
                required
              />
            </label>
            <label className={style.label}>
              <span>Фамілія</span>
              <input
                className={style.input}
                id={shortid.generate()}
                type="text"
                name="lastName"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Прізвище може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Чуб, Сокира тощо."
                required
              />
            </label>
          </div>
          <label className={style.label}>
            <span>Назва компаніі, організаціі</span>
            <input
              className={style.input}
              id={shortid.generate()}
              type="text"
              name="company"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва компанії може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Рошен, Моршинська тощо."
              required
            />
          </label>
          <label htmlFor="file" className={style.logoInput}>
            + Логотип
            <input
              type="file"
              name="file"
              id="file"
              className={style.inputfile}
            />
          </label>
          <label className={style.label}>
            <span>Email-адрес</span>
            <input
              className={style.input}
              id={shortid.generate()}
              type="email"
              name="email"
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
              title="Email може складатися тільки з літер, цифр, тире. Наприклад alex@gmail.com, ivan@urk.net тощо."
              required
            />
          </label>
          <label className={style.label}>
            <span>Номер телефону</span>
            <input
              className={style.input}
              id={shortid.generate()}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефону повинен складатися з цифр і може містити пробіли, тире, круглі дужки і може починатися з +"
              required
            />
          </label>
        </div>
        <div>
          <label className={style.label}>
            <span>Країна</span>
            <input
              className={style.input}
              id={shortid.generate()}
              type="text"
              name="country"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва країни може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Україна, Велика Британія тощо"
              required
            />
          </label>
          <div className={style.nameWrapper}>
            <label className={style.label}>
              <span>Місто</span>
              <input
                style={{ marginRight: "15px" }}
                className={style.input}
                id={shortid.generate()}
                type="text"
                name="city"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Назва міста може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Одеса, Київ тощо"
                required
              />
            </label>
            <label className={style.label}>
              <span>Штат, район</span>
              <input
                className={style.input}
                id={shortid.generate()}
                type="text"
                name="state"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Назва Штата(района) може складатися тільки з літер, апострофу, тире та пробілів. Наприклад Суворовський, Київський тощо"
                required
              />
            </label>
          </div>
          <label className={style.label}>
            <span>Адреса</span>
            <input
              className={style.input}
              id={shortid.generate()}
              type="text"
              name="address"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва Адреси може складатися тільки з літер, цифр, апострофу, тире та пробілів. Наприклад Паустовського 5, Бочарова 46 тощо"
              required
            />
          </label>
          <label className={style.label}>
            <span>Почтовий індекс</span>
            <input
              style={{ width: "170px" }}
              className={style.input}
              id={shortid.generate()}
              type="number"
              name="index"
              pattern="[0-9]{6}"
              title="Індекс може складатися с цифр та має налічувати 6 цифр. Наприклад 65111, 62101 тощо"
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
