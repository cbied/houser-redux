import React from 'react'

const House = props => {
    const { deleteOneHouseFn } = props
    const { id, name, address,
            city, state, zipcode, image_url,
            mortgage, rent } = props.house
        return (
            <div>
                <button onClick={() => deleteOneHouseFn(id)}>Delete</button>
                    <ul>
                        <li><img src={image_url} alt="house"/></li>
                        <li>Property: {name}</li>
                        <li>Address: {address}</li>
                        <li>City: {city}</li>
                        <li>State: {state}</li>
                        <li>Zip: {zipcode}</li>
                        <li>Monthly Mortgage: {mortgage}</li>
                        <li>Desired Rent: {rent}</li>
                    </ul>
            </div>
        )
    
}

export default House
