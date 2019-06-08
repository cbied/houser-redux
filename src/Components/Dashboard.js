import React, { Component } from 'react'

import House from '../Components/House'

import { Link } from 'react-router-dom';
import Axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.getAllHouses();
        }, 1000)
            
        
        
    }

    getAllHouses = () => {
        Axios.get('/api/properties')
            .then(response => this.setState({ houses: response.data }))
            .catch(error => console.log(`Dashboard-getAllHouses: ${error}`))
    }

    deleteOneHouse = id => {
        Axios.delete(`/api/properties/${id}`)
            .then(response => this.setState({ houses: response.data }))
            .catch(error => console.log(`Dashboard-deleteOneHouse: ${error}`))
    }

    render() {
        const { houses } = this.state,
            displayHouses = houses.map(house => {
            return (
                <li key={house.id}>
                    <House 
                    house={house}
                    deleteOneHouseFn={this.deleteOneHouse}
                    />
                </li>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to="/wizard/step1">
                    <button>Add New Property</button>
                </Link>
                <h2>Listings</h2>
                <ul>{displayHouses}</ul>
            </div>
        )
    }
}

export default Dashboard

