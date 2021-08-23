import React from 'react';
import './Body.css';

export default function Body() {
    return (
        <div className="body">
            <div className="main">
                <img src="/imgs/Bitmap.png" alt="" width="100%" />
            </div> 
            <div className="projects">
                <div className="projects-title">
                    <h5>•</h5>
                    <h2>Новые проекты</h2>
                    <h5>•</h5>
                </div>
                <div className="project-items">
                    <div className="item">
                        <img src="/imgs/Bitmap (6).png" alt="" />
                        <h3>Котедж Первый Парковый</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (5).png" alt="" />
                        <h3>Квартира ЖК Риверстоун</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (4).png" alt="" />
                        <h3>Дом Грузевица-3</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (3).png" alt="" />
                        <h3>Дом по улице Летняя</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (2).png" alt="" />
                        <h3>Магазин Аристократ</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (1).png" alt="" />
                        <h3>Магазин SEW TECH</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (7).png" alt="" />
                        <h3>Апартанменты</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (8).png" alt="" />
                        <h3>Бутик Mix</h3>
                    </div>
                    <div className="item">
                        <img src="/imgs/Bitmap (9).png" alt="" />
                        <h3>Загородный дом</h3>
                    </div>
                </div>
            </div>
            <div className="text">
                <h2>Заказать дизайн интерьера в Хмельницком для своего дома!</h2>
                <h3>Дом для каждого из нас – это место, где мы чувствуем уют и покой, обретаем душевное равновесие, куда мы все спешим после тяжелого рабочего дня, и где хотим спрятаться от городской суматохи. И, конечно, у каждого есть дом мечты, который, наверное, был придуман и визуализирован еще в детстве или же, наоборот, есть мечта, но нет четкого представления как он будет выглядеть. Команда We-ART с радостью поможет Вам выполнить абсолютно любой дизайн интерьера Хмельницкий.</h3>
                <h3>За время работы команда дизайн студии интерьера в Хмельницком We-ART накопила достаточно знаний и навыков, чтобы удовлетворить вкусы любого клиента, а также выполнила десятки проектов, в том числе и для представителей своей сферы. Каждый клиент уникален, и каждый ставит свои приоритеты – для кого-то это время, для кого-то цена. Для команды We-ART в приоритете же качество выполнения задач и пожелания клиента, поэтому про нашу компанию за все время работы отзывались только с хорошей стороны.</h3>
                <p><a href="/" alt="">ЧИТАТЬ БОЛЬШЕ</a></p>
            </div>
        </div>
    );
}

