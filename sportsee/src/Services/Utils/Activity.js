export default class Activity {
    constructor(data) {
        this.id = data.userId
        this.sessions = data.sessions
        this.day = data.sessions.day
        this.kilo = data.sessions.kilogram
        this.calorie = data.sessions.calories
    }
}