import React, { Component } from 'react'

import store, { UPDATE_IMAGE_URL, CANCEL_LISTING } from '../../store'

import { Link } from 'react-router-dom'

export class WizardTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_url: store.getState().image_url
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ image_url: store.getState().image_url })
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    amendStore = () => {
        const { image_url } = this.state
        store.dispatch({ type: UPDATE_IMAGE_URL, payload: image_url })
    }

    cancelListing = () => {
        store.dispatch({ type: CANCEL_LISTING })
    }

    render() {
        const { image_url } = this.state
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
                    <div className="image_url">
                        <h4>Image URL</h4>
                        <input type="text" name="image_url" value={image_url}
                        onChange={e => this.handleChange(e)}
                        />
                    </div>
                    <div className="wizardPrvNext">
                        <button className="prevBtn">
                            <Link to="/wizard/step1" className="prevStep">Previous Step</Link>
                        </button>
                        <button className="nextBtn">
                            <Link to="/wizard/step3" className="nextStep"
                            onClick={() => this.amendStore()}
                            >Next Step</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WizardTwo
