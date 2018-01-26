(function test(){
    let country = [];
    this.countryPicker = function(){
        let input = document.getElementById('number');
        getCountry(Number(input.value));
        input.value = "";
    }
    async function getCountry(num){
        let url = "https://restcountries.eu/rest/v2/";
        let prom = await fetch(`${url}all?fields=name`); 
        let res = await prom.json();
        country = res[num];
        prom = await fetch(`${url}name/${country.name}?fullText=true`);
        country = await prom.json();
        return generateHtml(country);
    }
    function generateHtml(country){
        let wrapper = document.getElementById('wrapper');
        wrapper.insertAdjacentHTML('beforeEnd',
                    `<ul>
                        <li>${country[0].name}</li>
                        <li>${country[0].nativeName}</li>
                        <li>${country[0].capital}</li>
                        <li>${country[0].population}</li>
                        <li><img style='max-width: 7rem;' src='${country[0].flag}'></li>
                    </ul>`
        );
    }
    return{
        countryPicker:this.countryPicker
    }

})();
