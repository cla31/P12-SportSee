export default class Performance {
    constructor(datas) {
        this.id = datas.userId
            //transforme l'objet datas.kind en tableau
        this.kindOfPerformance = this.Performances(datas.kind)
            //On récupère les value dans un tableau
        this.values = datas.data.map(elmt => elmt.value)
            //Création d'un tableau d'objets avec les values et les kind
        this.AllPerformancesDatas = datas.data.map((elmt, index) => ({
            value: this.values[index],
            kind: this.kindOfPerformance[index],

        }))
        this.AllPerformances = this.AllPerformancesDatas.reverse()
    }

    Performances() {
        const Performances = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ]
        return Performances
    }

}