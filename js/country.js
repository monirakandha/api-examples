const loadCountries =() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
};

loadCountries();

const displayCountries = counties => {
    // for(const country of counties){
    //     console.log(country);
    // }
    const countiesDiv = document.getElementById('countries')
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = 
        `<h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick ="loadCountryByName('${country.name}')" >Details</button>`;
        countiesDiv.appendChild(div);


    });

}


const loadCountryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML =`
    <h2>${country.name}</h2>
    <h5>Population: ${country.population}</h5>
    <img width="200px" src="${country.flag}"> 
    <h3>Capital: ${country.capital}</h3>`
}