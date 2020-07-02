import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";

const Home = (props) => {
    const{pizzas} = props;
    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <Categories items = {[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}/>
                </div>
                <SortPopup items = {['популярности', 'цене','алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map( (pizza) =>  <PizzaBlock key={pizza.id} {...pizza}/>)}


            </div>
        </div>
    )
}
export default Home;