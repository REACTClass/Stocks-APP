import React from 'react'
import Data from '../Data'
import {Link} from 'react-router-dom'

export default function Dashboard () {
    return (
        <div className='dash-container'>
            <h1>Most Active Stocks</h1>
            <table>
                <thead colSpan={3}>
                <tr>
                    <th>Company Name</th>
                    <th>Price</th>
                    <th className='change'>Change</th>
                </tr>
                </thead>
                <tbody>
                    {Data.map((item, index) => {
                    return (
                    <tr key={index}>
                        <td><Link to={`/stocks/:${item.symbol}`}>{item.name}</Link></td>
                        <td>{item.lastPrice}</td>
                        <td>{item.change.toFixed(2)}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    )
}

