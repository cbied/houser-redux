import React, { Component } from 'react'

import store, { UPDATE_MORTGAGE, UPDATE_RENT, CANCEL_LISTING } from '../../store'

import Axios from 'axios'
import { Link } from 'react-router-dom'

export class WizardThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                mortgage: store.getState().mortgage,
                rent: store.getState().rent
            })
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    amendStore = () => {
        const { mortgage, rent } = this.state
        store.dispatch({ type: UPDATE_MORTGAGE, payload: mortgage })
        store.dispatch({ type: UPDATE_RENT, payload: rent })
    }

    cancelListing = () => {
        store.dispatch({ type: CANCEL_LISTING })
    }

    addOneHouse = () => {
        const { name, address, city, state, zipcode, image_url } = store.getState(),
            { mortgage, rent } = this.state

            const newProperty = {
                name: name,
                address: address,
                city: city,
                state: state,
                zipcode: zipcode,
                image_url: image_url,
                mortgage: mortgage,
                rent: rent
            }

            // called cancelListing b/c I put it on the cancel button but it also clears inputs
            Axios.post("/api/properties", newProperty)
                .then(() => this.cancelListing())
    }

    render() {
        const { mortgage, rent } = this.state
        return (
            <div className="container">
                 <div className="wizardHeader">
                    <h2>Add New Listing</h2>
                    <h3>
                        <Link to="/">
                            <button className="cancelBtn"
                            onClick={() => this.cancelListing()}
                            >Cancel</button>
                        </Link>
                    </h3>
                </div>
                <div className="insideContainer">
                    <div className="monthly">
                        <h4>Monthly Mortgage Amount</h4>
                        <input type="number" name="mortgage" value={mortgage}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div className="monthly">
                        <h4>Desired Monthly Rent</h4>
                        <input type="number" name="rent" value={rent}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>

                    <div className="wizardPrvNext">
                            <Link to="/wizard/step2">
                                <button className="prevBtn">
                                    Previous Step
                                </button>
                            </Link>
                            <Link to="/" 
                                onClick={() => this.addOneHouse()}
                                >
                                <button className="nextBtn">
                                    Complete
                                </button>
                            </Link>
                            
                        </div>
                </div>
            </div>
        )
    }
}

export default WizardThree
