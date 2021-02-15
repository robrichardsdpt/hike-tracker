import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ProgressChart = ({ completed, total }) => {
const data = [
  { name: 'Remaining', value: total - completed},
  { name: 'Completed', value: completed }
]

const COLORS = ['#FE8800', '#9FC49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


    return (
      <div>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={125}
            cy={125}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          {Math.floor(completed/total *100)} % toward goal
      </div>
    );
  }

  export default ProgressChart