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
        }, 1500)
            
        
        
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
                <div key={house.id}>
                    <House 
                    house={house}
                    deleteOneHouseFn={this.deleteOneHouse}
                    />
                </div>
            )
        })
        return (
            <div className="container">
                <div className="dashboardHeader">
                    <h1>Dashboard</h1>
                    <Link to="/wizard/step1">
                    <button className="addNewProp">
                    
                        Add New Property
                    </button>
                    </Link> 
                </div>
                <h2>Property Listings</h2>
                
                    {displayHouses}
               
            </div>
        )
    }
}

export default Dashboard

