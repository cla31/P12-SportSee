// import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { userDatas } from '../Services/model'
import { userActivity } from '../Services/model.js'
import { userAverageSessions } from '../Services/model.js'
import { userPerformance } from '../Services/model.js'

const Dashboard = () => {
  const { id } = useParams()
  userDatas(id)
  userActivity(id)
  userAverageSessions(id)
  userPerformance(id)
  // console.log(id)

  return <div>Hello World</div>
}

export default Dashboard
