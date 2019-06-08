import React, { Component } from 'react'

import store, {
    UPDATE_NAME, UPDATE_ADDRESS,
    UPDATE_CITY, UPDATE_STATE,
    UPDATE_ZIPCODE, CANCEL_LISTING
} from '../../store'

import { Link } from 'react-router-dom'

export class Wizard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zipcode: store.getState().zipcode
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                name: store.getState().name,
                address: store.getState().address,
                city: store.getState().city,
                state: store.getState().state,
                zipcode: store.getState().zipcode
            })
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    amendStore = () => {
        const { name, address, city, state, zipcode } = this.state

        store.dispatch({ type: UPDATE_NAME, payload: name })
        store.dispatch({ type: UPDATE_ADDRESS, payload: address })
        store.dispatch({ type: UPDATE_CITY, payload: city })
        store.dispatch({ type: UPDATE_STATE, payload: state})
        store.dispatch({ type: UPDATE_ZIPCODE, payload: zipcode })
    }

    cancelListing = () => {
        store.dispatch({ type: CANCEL_LISTING })
    }

    render() {
        const { name, address, city, state, zipcode } = this.state
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
                <div>
                    <h4>Property Name</h4>
                    <input type="text" name="name" value={name}
                    onChange={e => this.handleChange(e)}
                    />
                </div>
                <div className="address">
                    <h4>Address</h4>
                    <input type="text" name="address" value={address}
                    onChange={e => this.handleChange(e)}
                    />
                </div>
                <div className="cityStateZip">
                    <div >
                        <h4>City</h4>
                        <input type="text" name="city" value={city}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <h4>State</h4>
                        <input type="text" name="state" value={state}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <h4>Zip Code</h4>
                        <input type="text" name="zipcode" value={zipcode}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>
                </div>
                </div>
                <div className="wizardLink">
                    
                    <Link to="/wizard/step2" 
                    onClick={() => this.amendStore()}
                    >
                        <button className="nextBtn">
                            Next Step
                        </button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

export default Wizard
