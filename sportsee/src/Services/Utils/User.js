export default class User {

    constructor(data) {
        this.id = data.id
        this.userFirstName = data.userInfos.firstName
        this.userLastName = data.userInfos.lastName
        this.userAge = data.userInfos.age
        this.todayScore = data.todayScore * 100
        this.calorieCount = data.keyData.calorieCount
        this.proteinCount = data.keyData.proteinCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount

    }

}