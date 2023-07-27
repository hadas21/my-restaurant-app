function getMealCatgeries() {
    return fetch('https://themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
}

function getMealByCategory(category) {
    return fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => err)
}

function getMealDetails(id) {
    return fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err);
}

module.exports = {
    getMealCatgeries,
    getMealByCategory,
    getMealDetails
}