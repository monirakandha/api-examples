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
        const h3 = document.createElement('h3');
        h3.innerText = `Country Name: ${country.name}`;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = `Capital Name : ${country.capital}`;
        div.appendChild(p);
        countiesDiv.appendChild(div);

    });

}