export default class AverageSessions {
    constructor(data) {
        this.id = data.userId
        this.sessions = data.sessions
        this.days = data.sessions.map((session) => session.day)
        this.sessions = data.sessions.map((session) => session.sessionLength)
    }
}