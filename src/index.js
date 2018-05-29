import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import { WishList } from "./models/WishList";

import {onSnapshot, getSnapshot} from 'mobx-state-tree'

let initialState = {
    items: [
        {
            name: "LEGO Mindstorms EV3",
            price: 349.95,
            image: "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg"
        },
        {
            name: "Miracles - C.S. Lewisfdsfds",
            price: 12.91,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg"
        }
    ]
}
// if(localStorage.getItem("wishlistapp")){
//     const json  = initialState = JSON.parse(localStorage.getItem("wishlistapp"))
//     //check if model did not change
//     if(WishList.is(json))
//         initialState = json
// }



let wishList = WishList.create(initialState)

onSnapshot(wishList, snapshot => {
    localStorage.setItem("wishlistapp", JSON.stringify(snapshot))
})

function renderApp(){
    ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
}

renderApp()

if(module.hot){
    module.hot.accept(['./components/App'], () => {
        // NEW COMPONENTS
        renderApp()
    })

    module.hot.accept(["./models/WishList"], ()=> {
        //NEW MODEL DEFINITIONS
        const snapshot = getSnapshot(wishList)
        wishList = WishList.create(snapshot)
        renderApp()
    })
}
