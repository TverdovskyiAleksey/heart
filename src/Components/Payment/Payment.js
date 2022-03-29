import React from "react";
import style from "./Payment.module.css";
import opportonities from "./opportunities.svg";
import payment from "./payment.svg";
import InputMask from "react-input-mask";

const Payment = () => {
  function testJump(x) {
    var ml = ~~x.getAttribute("maxlength");
    if (ml && x.value.length >= ml) {
      do {
        x = x.nextSibling;
      } while (x && !/text/.test(x.type));
      if (x && /text/.test(x.type)) {
        x.focus();
      }
    }
  }

  return (
    <div>
      <h2 className={style.title}>Види допомоги</h2>
      <p>Ви можете змінити вид допомоги</p>
      <ul className={style.list}>
        <li className={style.item}>
          <a href="/" className={style.link}>
            <svg style={{ fill: "black" }} className={style.svg}>
              <use href={opportonities + "#icon-hand"}></use>
            </svg>
            Зробити
          </a>
        </li>
        <li className={style.item}>
          <a href="/" className={style.link}>
            <svg style={{ fill: "black" }} className={style.svg}>
              <use href={opportonities + "#icon-purse"}></use>
            </svg>
            Фінансова допомога
          </a>
        </li>
        <li className={style.item}>
          <a href="/" className={style.link}>
            <svg style={{ fill: "black" }} className={style.svg}>
              <use href={opportonities + "#icon-clothes"}></use>
            </svg>
            Матеріальна допомога
          </a>
        </li>
        <li className={style.item}>
          <a href="/" className={style.link}>
            <svg style={{ fill: "black" }} className={style.svg}>
              <use href={opportonities + "#icon-heart"}></use>
            </svg>
            Волонтерство
          </a>
        </li>
      </ul>
      <div className={style.paymentWrapper}>
        <div>
          <h3 className={style.cardTitle}>Спосіб оплати</h3>
          <ul className={style.paymentList}>
            <li className={style.paymentItem}>
              <a href="/" className={style.paymentLink}>
                <svg className={style.paymentSvg}>
                  <use href={payment + "#icon-visa"}></use>
                </svg>
              </a>
            </li>
            <li className={style.paymentItem}>
              <a href="/" className={style.paymentLink}>
                <svg className={style.paymentSvg}>
                  <use href={payment + "#icon-private24"}></use>
                </svg>
              </a>
            </li>
            <li className={style.paymentItem}>
              <a href="/" className={style.paymentLink}>
                <svg className={style.paymentSvg}>
                  <use href={payment + "#icon-terminale"}></use>
                </svg>
              </a>
            </li>
            <li className={style.paymentItem}>
              <a href="/" className={style.paymentLink}>
                <svg className={style.paymentSvg}>
                  <use href={payment + "#icon-webmoney"}></use>
                </svg>
              </a>
            </li>
            <li className={style.paymentItem}>
              <a href="/" className={style.paymentLink}>
                <svg className={style.paymentSvg}>
                  <use href={payment + "#icon-paypal"}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={style.cardTitle}>Введіть наступні данні</h3>
          <form className={style.cardForm} autoComplete="off">
            <p className={style.cardText}>Номер картки</p>
            <div className={style.numWrapper}>
              <input
                type="num"
                id="card-number"
                className={style.numInput}
                maxLength="4"
                onInput={(e) => testJump(e.target)}
              />
              <input
                type="num"
                id="card-number-1"
                className={style.numInput}
                maxLength="4"
                onInput={(e) => testJump(e.target)}
              />
              <input
                type="num"
                id="card-number-2"
                className={style.numInput}
                maxLength="4"
                onInput={(e) => testJump(e.target)}
              />
              <input
                type="num"
                id="card-number-3"
                className={style.numInput}
                maxLength="4"
                onInput={(e) => testJump(e.target)}
              />
            </div>
            <div className={style.dateWrapper}>
              <label htmlFor="" className={style.dateLabel}>
                Термін дії
                <InputMask
                  type="num"
                  mask="99/99"
                  maskChar=""
                  alwaysShowMask="false"
                  onInput={(e) => testJump(e.target)}
                  className={style.dateInput}
                />
              </label>
              <label htmlFor="" className={style.dateLabel}>
                CVC/CVV
                <input type="num" maxLength="3" className={style.dateInput} />
              </label>
            </div>
          </form>
        </div>
      </div>
      <button className={style.btnSend}>Допомогти</button>
    </div>
  );
};

export default Payment;
