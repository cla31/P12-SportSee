export default class Activity {
    constructor(data) {
        this.id = data.userId
            // D'abord je récupère un tableau de dates, que je transforme en chiffre grâce à l'index, puis les chiffres en string
        this.sessionsDays = data.sessions.map(((elmt, index) => elmt.day = (index + 1).toString()))
            // automatiquement, les jours sont remplacés par les chiffres
        this.allDatasSessions = data.sessions

    }

}