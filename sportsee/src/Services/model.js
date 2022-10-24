import { getDatas } from './fetch'
import Activity from './Utils/Activity'
import AverageSessions from './Utils/AverageSessions'
import User from './Utils/User'
import Performance from './Utils/Performance'

export const userDatas = async(id) => {
    let url = '';
    if (id === '15') {
        url = '/MockDatas/userDatas.json'
    } else {
        url = `http://localhost:3000/user/${id}`
            // console.log("id", id)
    }

    const allUserDatas = await getDatas(url)
    const userInfos = new User(allUserDatas)
        // console.log("userInfos", userInfos)
    return userInfos
}

export const userActivity = async(id) => {
    let url = '';
    if (id === '15') {
        url = '/MockDatas/userActivities.json'
    } else {
        url = `http://localhost:3000/user/${id}/activity`
            // console.log("id", id)
    }
    const allUserActivities = await getDatas(url)
        // console.log("££££££££££ Ce qui arrive dans l'objet Activity", allUserActivities)
    const userActivityInfos = new Activity(allUserActivities)
        // console.log("userActivityInfos", userActivityInfos)
    return userActivityInfos
}


export const userAverageSessions = async(id) => {
    let url = '';
    if (id === '15') {
        url = '/MockDatas/userAverageSession.json'
    } else {
        url = `http://localhost:3000/user/${id}/average-sessions`
            // console.log("id", id)
    }
    const allUserAverageSessions = await getDatas(url)
        // console.log("+++++++++++", allUserAverageSessions)
    const userAverageSessionsInfos = new AverageSessions(allUserAverageSessions)
        // console.log("userAverageSessionsInfos", userAverageSessionsInfos)
    return userAverageSessionsInfos
}


export const userPerformance = async(id) => {
    let url = '';
    if (id === '15') {
        url = '/MockDatas/userPerformances.json'
    } else {
        url = `http://localhost:3000/user/${id}/performance`
        console.log("id", id)
    }
    const allUserPerformances = await getDatas(url)
        // console.log("*************", allUserPerformances)
    const userPerformancesInfos = new Performance(allUserPerformances)
        // console.log("allUserPerformances", userPerformancesInfos)
    return userPerformancesInfos
}