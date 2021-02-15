import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const ProgressChart = ({ hikes, totalPeaks }) => {
console.log(hikes.length)
const hikesLength = hikes.length
const data = [
  { name: 'Remaining', value: totalPeaks - hikesLength},
  { name: 'Completed', value: hikesLength }
];
console.log(data)

const COLORS = ['#0088FE', '#00C49F'];

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
            {Math.floor(hikesLength/totalPeaks *100)} % toward goal
      </div>
    );
  }

  export default ProgressChart
