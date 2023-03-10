import React, { Component } from 'react'
import carphoto from '../assets/img/unsplash.jpg'
import Card from './Card';
import List from './List';
export class App extends Component {
    render() {
        return (

            <>

                <img src={carphoto} width={200} alt="" />
                <List />


                <div className='my-flex'>
                    <Card />
                    <Card />
                    <Card />


                </div>
            </>
        )
    }
}

export default App