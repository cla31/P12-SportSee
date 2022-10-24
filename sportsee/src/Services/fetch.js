export const getDatas = async(url) => {
    try {
        const response = await fetch(url)
        const fetchDatas = await response.json()
            // console.log("fetchDatas", fetchDatas.data)
        return fetchDatas.data

    } catch (erreur) {
        console.log(erreur)
    }
}