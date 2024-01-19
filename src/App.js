
import './style/Navbar.css'
import Navbar from "./components/Navbar";
import './style/App.css'
import iconPlay from './img/iconPlay 1.svg'
import YouTube from './img/contact/iconYouTube.svg'
import VK from './img/contact/iconVK 1.svg'
import Twitter from './img/contact/iconTwitter.svg'
import Fb from './img/contact/iconFB.svg'
import Arrow from './img/Arrow 1.svg'
import Hawaii from './img/imgHawaii 1.png'

function App() {
  return (
    <div className="App">
      <div className={"wrapper__header"}>
        <Navbar/>
        <div className={'text'}>
          <h1 className={'text__h1'}>Открой для себя Новую Ирландию</h1>
          <p className={'text__p'}>Авторские туры по экзотическим уголкам от Ивана Иванова</p>
          <div className={'button__two'}>
            <button className={`button__one`}>Оставьте заявку</button>
            <img className={'button__img'} src={iconPlay} alt={'sd'}/>
            <p className={'button__p'}>Посмотрите
            видео-отчет
            2018-2019</p>
          </div>
        </div>
        <div className={'header__footer'}>
          <div className={'contact'}>
            <p className={'contact__text'}>Подписывайтесь в соцсетях</p>
            <ul className={'contact__ul'}>
              <li><img src={YouTube} alt={'asd'}/></li>
              <li><img src={VK} alt={'asd'}/></li>
              <li><img src={Twitter} alt={'asd'}/></li>
              <li><img src={Fb} alt={'asd'}/></li>
            </ul>
          </div>
          <div className={'footer__card'}>
            <div className={'card__1 card-1'}>
              <h3 className={'card__h3'}>02</h3>
              <div className={"card__bottom"}>
                <p className={'card__p'}>Водопады Исландии</p>
                <img className={'arrow'} src={Arrow}/>
              </div>
            </div>
            <div className={'card__1 card-2'}>
              <h3 className={'card__h3'}>03</h3>
              <div className={"card__bottom"}>
                <p className={'card__p'}>Водопады Исландии</p>
                <img className={'arrow'} src={Arrow}/>
              </div>
            </div>
            <div className={'card__1 card-3'}>
              <h3 className={'card__h3'}>04</h3>
              <div className={"card__bottom"}>
                <p className={'card__p'}>Водопады Исландии</p>
                <img className={'arrow'} src={Arrow}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'wrapper'}>
         <div className={'about'}>
            <img src={Hawaii} alt={'asd'}/>
           <div className={'about__text'}>
             <h1 className={"about__text-h1"}>
               Посмотрите все
               направления туров
             </h1>
             <p className={'about__text-p'}>Берега океанов и дикие пляжи с редкими породами
               деревьев. Местная архитектура и первозданный вид дикой природы</p>
             <a href={'#'} className={'about__link'}>Смотреть все</a>
           </div>
         </div>
      </div>
      <div className={'form'}>
        <div className={'wrapper'}>
          <div className={'form__flex'}>
          <div className={'form__text'}>
            <h1 className={'about__text-h1'}>Оставьте заявку на бесплатную консультацию</h1>
            <p className={'form__text-p'}>Мы перезвоним вам в ближайшее время</p>
          </div>
            <div>
          <form className={'mainForm'}>
            <div>
            <input className={'input'} type={'name'} name={'name'} placeholder={'Ваше имя'}/>
            </div>
            <div>
            <input className={'input'} type={'phone'} name={'phone'} placeholder={'Ваш номер телефона'}/>
            </div>
            <button className={'button__one'} type={'submit'}>Отправить заявку</button>
          </form>
              <div className={'centered'}>
              <p className={'obra'}>Нажимая кнопку, вы даёте согласие
                на <span className={'color'}>обработку персональных данных</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

// card.addEventListener('click', (e) => {

export default App;
