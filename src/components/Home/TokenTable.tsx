import React from 'react'

export default function TokenTable() {
  return (
    <div className="overflow-scroll">
      <ActionBar />
      <table className="overflow-scroll">
        <thead className="h-10 shadow-sm">
          <tr>
            <th>#</th>
            <th>Token</th>
            <th>Price</th>
            <th>24h</th>
            <th>7D</th>
            <th>MaxSupply</th>
            <th>CurrentSupply</th>
            <th>Volume(24h)</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <tr key={index} className="h-10 shadow-sm font-medium">
                <td>{index + 1}</td>
                <td>VIE</td>
                <td>3.2$</td>
                <td>+32.5%</td>
                <td className="text-lime-700">+21.2%</td>
                <td>50,000,000</td>
                <td>520,000</td>
                <td>6,565</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

function ActionBar() {
  return (
    <div className="p-2">
      <button className="btn btn-sm">lock</button>
    </div>
  )
}
