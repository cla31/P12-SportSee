import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="customTooltip">
        <p className="tooltipData">{`${payload[0].value} `}g</p>
        <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
      </div>
    )
  }
  return null
}

const ActivityGraph = ({ userActivity }) => {
  return (
    // Pour que les dimensions du graphique soit à 100% dans l'élément parent
    <ResponsiveContainer width="100%" height="100%">
      {/* Pour plus d'infos sur BarChart cf lien ci-dessous:
      propriétés, composants parents, enfants etc */}
      {/* https://recharts.org/en-US/api/BarChart */}
      <BarChart
        data={userActivity}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7} //epaisseur de la barre
        barGap={8} //espace entre chaque barre
      >
        {/*Pour afficher les dates*/}
        <XAxis
          className="activityXAxis"
          dataKey="day"
          tickLine={false}
          stroke=" #DEDEDE"
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          padding={{ left: -47, right: -48 }}
          tickMargin={16}
        />
        {/*Pour afficher les valeurs y*/}
        <YAxis
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          tickMargin={45}
          minTickGap={27}
        />
        {/*Customisation de l'info bulle*/}
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            color: '#FFF',
            background: 'red',
            border: 'none',
            outline: 'none',
            width: '70px',
            height: '85px',
            textAlign: 'center',
            lineHeight: '2.5',
          }}
        />
        {/* Affichage de la légende poids et calories brûlées du graphique */}
        <Legend
          className="activityLegend"
          verticalAlign="top"
          align="right"
          iconType={'circle'}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 20 }}
          formatter={(value) => {
            return (
              <span style={{ color: '#74798C', fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            )
          }}
        />
        {/*customize et permet d'afficher les barres qui affichent les valeurs*/}
        {/* la datakey correspond à la "payload[0].value" de customTooltip */}
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />

        <Bar
          dataKey="calories"
          name="Calories brulées (kCal)"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
        {/*Pour afficher le titre du graphique :position par rapport aux axes des x et y etc.*/}
        <text className="graphTitle" x="4%" y="15%" style={{ fontWeight: 500 }}>
          Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ActivityGraph
