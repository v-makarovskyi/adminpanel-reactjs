import React from 'react'
import {
    AreaChart,  Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts'

import './chart.scss'

const data = [
    { name: 'Январь', Всего: 1200 },
    { name: 'Февраль', Всего: 1350 },
    { name: 'Март', Всего: 6800 },
    { name: 'Апрель', Всего: 7200 },
    { name: 'Май', Всего: 1500 },
    { name: 'Июнь', Всего: 1240 },
]

const Chart = ({ aspect, title }) => {
  return (
    <div className='chart'>
        <div className="title">{title}</div>
        <ResponsiveContainer width='100%' aspect={aspect}>
            <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{
                    top: 10,
                    left: 30,
                    right: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='15%' stopColor='lightblue' opacity={0.8} />
                        <stop offset='85%' stopColor='blue' opacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey='name' stroke='grey'/>
                <CartesianGrid strokeDasharray='3 3' className='chartGrid'/>
                <Tooltip />
                <Area 
                    type='monotone'
                    dataKey='Всего'
                    stroke='#8884d8'
                    fillOpacity={1}
                    fill='url(#total)'
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart