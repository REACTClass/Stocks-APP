import React from 'react'
import Data from '../Data'

export default function Dashboard ({item}) {
    return (
        <div className='dash-container'>
            <h1>Most Active Stocks</h1>
            <table striped>
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
                    <tr>
                        <td key={index}>{item.name}</td>
                        <td>{item.lastPrice}</td>
                        <td>{item.change.toFixed(2)}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
{/* name price change */}
        </div>
    )
}