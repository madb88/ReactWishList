import React, { Component } from 'react';
import WishListView from './WishListView'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">WishList</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <WishListView wishList={this.props.wishList}/>
            </div>
        );
    }
}

export default App;
