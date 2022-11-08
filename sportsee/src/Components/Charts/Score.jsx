import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'
/**
 * Display user's score chart
 * @component
 * @param {number} score - user score number
 * @returns {JSX.Element} ScoreGraph component
 */

// https://recharts.org/en-US/api/RadialBarChart
const ScoreGraph = ({ userMain }) => {
  const data = [
    {
      uv: userMain,
      fill: '#E60000',
    },
  ]

  return (
    //  Affiche le container
    <ResponsiveContainer width="100%" aspect={1}>
      <RadialBarChart
        style={{ backgroundColor: 'var(--gris)', borderRadius: '5px' }}
        width="100%"
        height="100%"
        //Rayon du cercle
        innerRadius={70}
        //épaisseur de la barre
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>

        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        {/*Affiche le marqueur rouge*/}
        <RadialBar
          background
          dataKey="uv"
          angleAxisId={1}
          fill="var(--red)"
          cornerRadius="10"
          data={[data[0]]}
        />

        <text
          // Affiche le pourcentage
          className="scoreSize"
          fontWeight="700"
          fontSize={26}
          fill="#282D30"
          //position de la zone de texte
          x="50%"
          y="45%"
          //Position du chiffre ds la zone de texte
          textAnchor="middle"
        >{`${userMain}%`}</text>

        <text
          className="graphTitle"
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="55%"
          textAnchor="middle"
        >
          de votre
        </text>

        <text
          className="graphTitle"
          fontWeight="500"
          fill="#74798C"
          x="50%"
          y="65%"
          textAnchor="middle"
        >
          objectif
        </text>

        <text
          className="graphTitle"
          x="8%"
          y="8%"
          // width={147}
          // height={48}
          dominantBaseline="middle"
          fill="#20253A"
          style={{ fontWeight: 500 }}
        >
          Score{' '}
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default ScoreGraph
//Proptypes
ScoreGraph.propTypes = {
  userMain: PropTypes.number.isRequired,
}
