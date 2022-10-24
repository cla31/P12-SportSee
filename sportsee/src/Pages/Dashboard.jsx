import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { userDatas } from '../Services/model'
import { userActivity } from '../Services/model.js'
import { userAverageSessions } from '../Services/model.js'
import { userPerformance } from '../Services/model.js'
import Activity from '../Components/Barchart/Activity'
import Performance from '../Components/Barchart/Performance'
import Sessions from '../Components/Barchart/Sessions'
import Score from '../Components/Barchart/Score'
import '../Style/Pages/Dashboard.css'
import Calories from './../Assets/calories.png'
import Proteines from './../Assets/proteines.png'
import Glucides from './../Assets/glucides.png'
import Lipides from './../Assets/lipides.png'
import NavHorizontale from '../Components/NavHorizontale'
import NavVerticale from '../Components/NavVerticale'

const Dashboard = () => {
  const { id } = useParams()
  userDatas(id)
  userActivity(id)
  userAverageSessions(id)
  userPerformance(id)
  console.log(id)

  const navigate = useNavigate()

  const [datas, setDatas] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const user_Datas = await userDatas(id)
        const user_Activity = await userActivity(id)
        const user_Performance = await userPerformance(id)
        const user_Sessions = await userAverageSessions(id)
        setDatas({ user_Datas, user_Activity, user_Performance, user_Sessions })
        setIsLoading(false)
      } catch (error) {
        console.log('=====error=====', error)
        navigate('/Page404')
      }
    })()
  }, [navigate, id])

  return (
    <div>
      <NavHorizontale />
      <div className="wrapperNavDashboard">
        <NavVerticale />
        <div className="dashboard">
          {isLoading ? (
            'Datas..loading mais loader à mettre là '
          ) : (
            <>
              <div className="bonjour">
                <h1>
                  Bonjour {''}
                  <span>{datas.user_Datas.userFirstName}</span>
                </h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
              </div>
              <div className="infosDashboard">
                <section className="graphiques">
                  <div className="graphActivity">
                    <Activity
                      userActivity={datas.user_Activity.allDatasSessions}
                    />
                  </div>
                  <div className="graphCarres">
                    <div className="sessions">
                      <Sessions
                        sessions={datas.user_Sessions.sessionsAllDatas}
                      />
                    </div>
                    <div className="performance">
                      <Performance
                        performance={datas.user_Performance.AllPerformances}
                      />
                    </div>
                    <div className="score">
                      <Score userMain={datas.user_Datas.todayScore} />
                    </div>
                  </div>
                </section>
                <section className="infosEffortsNutriments">
                  <div className="calories">
                    <img src={Calories} alt="" />
                    <div className="infos">
                      <h3>{datas.user_Datas.calorieCount}kCal</h3>
                      <p>Calories</p>
                    </div>
                  </div>
                  <div className="proteines">
                    <img src={Proteines} alt="" />
                    <div className="infos">
                      <h3>{datas.user_Datas.proteinCount}g</h3>
                      <p>Proteines</p>
                    </div>
                  </div>
                  <div className="glucides">
                    <img src={Glucides} alt="" />
                    <div className="infos">
                      <h3>{datas.user_Datas.carbohydrateCount}g</h3>
                      <p>Glucides</p>
                    </div>
                  </div>
                  <div className="lipides">
                    <img src={Lipides} alt="" />
                    <div className="infos">
                      <h3>{datas.user_Datas.lipidCount}g</h3>
                      <p>Lipides</p>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
