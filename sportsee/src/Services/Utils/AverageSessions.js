export default class AverageSessions {
    constructor(datas) {
        this.id = datas.userId
            //Je récupère les jours sous forme de chiffres
        this.sessions = datas.sessions.map((elmt) => elmt.day)
            //Je transforme les jours chiffrés en lettres, renvoie un tableau de lettres
        this.sessionsDays = this.Days(this.sessions)
            //je récupère un tableau de sessionLength
        this.sessionLength = datas.sessions.map((elmt) => elmt.sessionLength)
        this.sessionsAllDatas = datas.sessions.map((elmt, index) => ({
            day: this.sessionsDays[index],
            sessionLength: this.sessionLength[index],
        }))
    }
    Days() {
        const Days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return Days
    }
}