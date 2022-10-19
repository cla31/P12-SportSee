export default class Activity {
    constructor(data) {
        this.id = data.userId
        this.sessions = data.sessions
        this.days = data.sessions.map((session) => session.day)
        this.kilos = data.sessions.map((session) => session.kilogram)
        this.calories = data.sessions.map((session) => session.calories)

    }
}