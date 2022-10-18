export default class AverageSessions {
    constructor(data) {
        this.id = data.userId
        this.sessions = data.sessions
        this.day = data.sessions.day
        this.session = data.sessions.sessionLength
    }
}