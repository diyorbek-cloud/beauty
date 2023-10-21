import './Main.css';
import { Pages } from './Pages';

function App() {
  return (
    <div className="App">
        {/* Hello Diyor doston  */}
      <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{width: 1920, height: 50, left: 0, top: 0, position: 'absolute'}}>
        <div style={{width: 1920, height: 50, left: 0, top: 0, position: 'absolute', background: '#EFEFEF'}} />
        <div style={{width: 447, height: 17, left: 736, top: 17, position: 'absolute'}}>
            <Pages text={'Доставка'} />
            <Pages text={'Оплата'} />
            <Pages text={'Отзывы'} />
            <Pages text={'Вопрос - ответ'} />   
            <Pages text={'Контакты'} />
            {/* <div style={{left: 94, top: 0, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}></div>
            <div style={{left: 172, top: 0, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}></div>
            <div style={{left: 256, top: 0, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}></div>
            <div style={{left: 382, top: 0, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}></div> */}
        </div>
    </div>
    <div style={{width: 1920, height: 1870, left: 0, top: 853, position: 'absolute', background: '#EFEFEF'}} />
    <div style={{width: 1920, height: 149, left: 0, top: 70, position: 'absolute'}}>
        <div style={{width: 170, height: 40, left: 1345, top: 20, position: 'absolute'}}>
            <div style={{width: 170, height: 40, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 40, border: '2px #F13C6E solid'}} />
            <div style={{width: 117, height: 15, left: 27, top: 12, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Обратный звонок</div>
        </div>
        <div style={{left: 1178, top: 30, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>8 (812) 123-45-67</div>
        <div style={{width: 80, height: 80, left: 405, top: 0, position: 'absolute'}}>
            <div style={{width: 14.90, height: 14.90, left: 8.14, top: 39.98, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0'}}></div>
            <div style={{width: 14.90, height: 14.90, left: 29.46, top: 18.70, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0'}}></div>
            <div style={{width: 14.90, height: 14.90, left: 29.45, top: 61.32, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0'}}></div>
            <div style={{width: 14.90, height: 14.90, left: 50.76, top: 39.99, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0'}}></div>
            <div style={{width: 14.90, height: 5.77, left: 46.69, top: 35.91, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 14.90, height: 5.77, left: 25.38, top: 57.24, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 14.90, height: 5.77, left: 39.98, top: 29.24, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 14.90, height: 5.77, left: 18.70, top: 50.54, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 5.77, height: 14.90, left: 18.68, top: 29.45, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 5.77, height: 14.90, left: 25.38, top: 22.78, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 5.77, height: 14.90, left: 46.68, top: 44.06, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 5.77, height: 14.90, left: 40.01, top: 50.76, position: 'absolute', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#F13C6E'}}></div>
            <div style={{width: 29.21, height: 18.67, left: 25.39, top: 61.33, position: 'absolute', background: '#EFEFEF'}}></div>
            <div style={{width: 18.67, height: 29.21, left: 0, top: 25.39, position: 'absolute', background: '#EFEFEF'}}></div>
            <div style={{width: 18.67, height: 29.21, left: 61.33, top: 25.39, position: 'absolute', background: '#EFEFEF'}}></div>
            <div style={{width: 29.21, height: 18.67, left: 25.39, top: 0, position: 'absolute', background: '#EFEFEF'}}></div>
        </div>
        <div style={{width: 158, height: 39, left: 505, top: 21, position: 'absolute', color: '#F13C6E', fontSize: 36, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3.60, wordWrap: 'break-word'}}>BEAUTY</div>
        <div style={{width: 250, height: 40, left: 835, top: 20, position: 'absolute', background: '#EFEFEF', borderRadius: 40}} />
        <div style={{width: 20, height: 20, left: 855, top: 30, position: 'absolute'}} src="search.png">
            <div style={{width: 20, height: 19.09, left: 0, top: 0.45, position: 'absolute', background: '#BDBDBD'}}></div>
        </div>
        <div style={{width: 1920, height: 0, left: 0, top: 100, position: 'absolute', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 675, height: 19, left: 622, top: 130, position: 'absolute'}}>
            <div style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Парикмахерская</div>
            <div style={{left: 168, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Барбершоп</div>
            <div style={{left: 294, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Маникюр</div>
            <div style={{left: 406, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Педикюр</div>
            <div style={{left: 516, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Массаж</div>
            <div style={{left: 617, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Мебель</div>
        </div>
    </div>
    <div style={{width: 1920, height: 604, left: 0, top: 249, position: 'absolute'}}>
        <img style={{width: 1920, height: 604, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, black 0%, black 100%)'}} src="Rectangle 2.png" />
        <div style={{width: 308, height: 219, left: 405, top: 192, position: 'absolute'}}>
            <div style={{width: 170, height: 40, left: 0, top: 179, position: 'absolute'}}>
                <div style={{width: 170, height: 40, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 40, border: '2px white solid'}} />
                <div style={{width: 117, height: 15, left: 27, top: 12, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Подробнее</div>
            </div>
            <div style={{width: 308, height: 35, left: 0, top: 94, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Текст акции всегда отражает суть, а не просто<br/>болтовню, поэтому внимательнее</div>
            <div style={{width: 308, height: 44, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Супер кресло</div>
        </div>
    </div>
    <div style={{width: 1110, height: 430, left: 405, top: 933, position: 'absolute'}}>
        <div style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Специальные предложения</div>
        <div style={{width: 255, height: 363, left: 0, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 285, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 570, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 855, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
    </div>
    <div style={{width: 1110, height: 430, left: 405, top: 2212, position: 'absolute'}}>
        <div style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Вы недавно смотрели</div>
        <div style={{width: 255, height: 363, left: 0, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 285, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 570, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
        <div style={{width: 255, height: 363, left: 855, top: 67, position: 'absolute'}}>
            <div style={{width: 255, height: 363, left: 0, top: 0, position: 'absolute', background: 'white'}} />
            <div style={{width: 195, height: 33, left: 30, top: 211, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Парикмахерское кресло «Норм» гидравлическое</div>
            <div style={{width: 130, height: 35, left: 62, top: 303, position: 'absolute'}}>
                <div style={{width: 130, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30}} />
                <div style={{left: 39, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.70, wordWrap: 'break-word'}}>Купить</div>
            </div>
            <div style={{width: 80, height: 19, left: 87, top: 264, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 21, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 1.05, wordWrap: 'break-word'}}>9 900 ₽ </div>
            <img style={{width: 125, height: 166, left: 65, top: 25, position: 'absolute', background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}} src="Rectangle 4.png" />
        </div>
    </div>
    <div style={{width: 540, height: 212, left: 405, top: 1463, position: 'absolute'}}>
        <div style={{width: 540, height: 212, left: 0, top: 0, position: 'absolute', background: '#F13C6E'}} />
        <div style={{width: 140, height: 140, left: 355, top: 36, position: 'absolute'}}>
            <div style={{width: 140, height: 106.54, left: 0, top: 16.73, position: 'absolute'}}>
                <div style={{width: 140, height: 106.54, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
                <div style={{width: 107.74, height: 76.95, left: 16.15, top: 14.82, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
            </div>
        </div>
        <div style={{width: 225, height: 35, left: 40, top: 142, position: 'absolute'}}>
            <div style={{width: 225, height: 35, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 30}} />
            <div style={{left: 25, top: 9, position: 'absolute', textAlign: 'center', color: '#C4C4C4', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Введите e-mail</div>
        </div>
        <div style={{width: 250, height: 17, left: 40, top: 35, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Получайте бонусы и подарки</div>
        <div style={{left: 40, top: 77, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Каждый месяц разыгрываем<br/>10 000 рублей для наших клиентов</div>
    </div>
    <div style={{width: 540, height: 212, left: 975, top: 1463, position: 'absolute'}}>
        <div style={{width: 540, height: 212, left: 0, top: 0, position: 'absolute', background: '#F13C6E'}} />
        <div style={{width: 188.67, height: 100, left: 306, top: 56, position: 'absolute', background: 'rgba(255, 255, 255, 0.40)'}}></div>
        <div style={{width: 170, height: 35, left: 40, top: 142, position: 'absolute'}}>
            <div style={{width: 170, height: 35, left: 0, top: 0, position: 'absolute', background: '#F13C6E', borderRadius: 30, border: '2px white solid'}} />
            <div style={{left: 29, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Карта магазинов</div>
        </div>
        <div style={{width: 250, height: 17, left: 40, top: 35, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Заходите к нам</div>
        <div style={{left: 40, top: 77, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 19.69, wordWrap: 'break-word'}}>Более 300 магазинов<br/>по всей России</div>
    </div>
    <div style={{width: 1110, height: 358, left: 405, top: 1774, position: 'absolute'}}>
        <div style={{width: 1110, height: 357, left: 0, top: 1, position: 'absolute', background: 'white'}} />
        <img style={{width: 149, height: 49, left: 60, top: 36, position: 'absolute'}} src="image.png" />
        <div style={{width: 1110, height: 0, left: 0, top: 120, position: 'absolute', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 1110, height: 0, left: 0, top: 239, position: 'absolute', border: '1px #EFEFEF solid'}}></div>
        <img style={{width: 149, height: 49, left: 339, top: 36, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 619, top: 36, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 898, top: 36, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 60, top: 155, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 339, top: 155, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 619, top: 155, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 898, top: 155, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 60, top: 274, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 339, top: 274, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 619, top: 274, position: 'absolute'}} src="image.png" />
        <img style={{width: 149, height: 49, left: 898, top: 274, position: 'absolute'}} src="image.png" />
        <div style={{width: 358, height: 0, left: 278, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 358, height: 0, left: 0, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 358, height: 0, left: 555, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 358, height: 0, left: 833, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 358, height: 0, left: 1110, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #EFEFEF solid'}}></div>
    </div>
    <div style={{width: 1920, height: 557, left: 0, top: 2722, position: 'absolute'}}>
        <div style={{width: 1920, height: 425, left: 0, top: 0, position: 'absolute', background: 'white'}} />
        <div style={{width: 255, height: 253, left: 405, top: 60, position: 'absolute'}}>
        </div>

        <div style={{width: 1920, height: 0, left: 0, top: 373, position: 'absolute', border: '1px #EFEFEF solid'}}></div>
        <div style={{width: 1110, height: 45, left: 405, top: 410, position: 'absolute'}}>
            <div style={{width: 170, height: 40, left: 940, top: 3, position: 'absolute'}}>
                <div style={{width: 170, height: 40, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 40, border: '2px #F13C6E solid'}} />
                <div style={{width: 117, height: 15, left: 27, top: 12, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Обратный звонок</div>
            </div>
            <div style={{left: 773, top: 13, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>8 (812) 123-45-67</div>
            <div style={{left: 441, top: 15, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>198555, Невский пр. 140, офис 140</div>
            <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 9999, border: '2px #F13C6E solid'}} />
            <div style={{width: 45, height: 45, left: 65, top: 0, position: 'absolute', background: 'white', borderRadius: 9999, border: '2px #F13C6E solid'}} />
            <div style={{width: 45, height: 45, left: 130, top: 0, position: 'absolute', background: 'white', borderRadius: 9999, border: '2px #F13C6E solid'}} />
            <div style={{width: 45, height: 45, left: 191, top: 0, position: 'absolute', background: 'white', borderRadius: 9999, border: '2px #F13C6E solid'}} />
            <div style={{width: 20, height: 20, left: 142, top: 13, position: 'absolute'}}>
                <div style={{width: 10.81, height: 20, left: 4.59, top: 0, position: 'absolute', background: '#F13C6E'}}></div>
            </div>
            <div style={{width: 22, height: 22, left: 202, top: 12, position: 'absolute'}}>
                <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#F13C6E'}}></div>
                <div style={{width: 11, height: 11, left: 5.50, top: 5.50, position: 'absolute', background: '#F13C6E'}}></div>
                <div style={{width: 1.47, height: 1.47, left: 16.18, top: 4.35, position: 'absolute', background: '#F13C6E'}}></div>
            </div>
            <div style={{width: 22.18, height: 16, left: 11, top: 15, position: 'absolute', background: '#F13C6E'}}></div>
            <div style={{width: 28.04, height: 16, left: 73, top: 15, position: 'absolute', background: '#F13C6E'}}></div>
        </div>
        <div style={{width: 1920, height: 64, left: 0, top: 493, position: 'absolute', background: '#EFEFEF'}} />
        <div style={{left: 405, top: 518, position: 'absolute', color: '#828282', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</div>
        <div style={{left: 1334, top: 518, position: 'absolute', textAlign: 'right', color: '#828282', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Политика конфиденциальности</div>
    </div>
</div>
    </div>
  );
}

export default App;
