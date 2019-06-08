import React from 'react'

const House = props => {
    const { deleteOneHouseFn } = props
    const { id, name, address,
            city, state, zipcode, image_url,
            mortgage, rent } = props.house
        return (
            <div className="propertiesList">
                    <ul>
                        <li><img src={image_url} alt="house"/></li>
                    </ul>
                    <ul>
                        <li>Property: {name}</li>
                        <li>Address: {address}</li>
                        <li>City: {city}</li>
                        <li>State: {state}</li>
                        <li>Zip: {zipcode}</li>
                    </ul>
                    <ul>
                        <li>Monthly Mortgage: {mortgage}</li>
                        <li>Desired Rent: {rent}</li>
                    </ul>

                    <button className="deleteBtn"
                    onClick={() => deleteOneHouseFn(id)}
                    >X</button>
            </div>
        )
    
}

export default House
