import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
// https://recharts.org/en-US/api/RadarChart
//https://articles.wesionary.team/radar-chart-with-recharts-6aa3a0b2480e
const Performance = ({ performance }) => {
  //console.log(performance)
  return (
    <div className="squareGraph performGraph">
      <ResponsiveContainer width="100%" aspect={1}>
        {/* Stylisation du composants et entrée des datas */}
        <RadarChart
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          style={{ backgroundColor: '#282D30' }}
          data={performance}
        >
          {/* Pour les rayons blancs */}
          <PolarGrid radialLines={false} />
          {/* Pour les titres des valeurs */}
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            dy={5}
            stroke="#FFF"
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
          {/* Pour gérer le contenu rouge */}
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
