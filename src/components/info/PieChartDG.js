import React from 'react'
import { Cell, Pie, PieChart } from 'recharts';

function PieChartDG() {
    const data = [
        { name: 'Uploaded Lectures', value: 25 },
        { name: 'Live Lectures', value: 33 },
        { name: 'Upcoming Lectures', value: 42 },
         ];

              const COLORS = ['#380885', '#D1D6FF', '#F16600'];

    return (
        <div className='chart'>
            <PieChart className='piechart' width={300} height={350}>
                <Pie data={data} label='name' dataKey="value" nameKey="name" innerRadius={50} outerRadius={100} >
                {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                    </Pie>
            </PieChart>
        </div>
    )
}

export default PieChartDG