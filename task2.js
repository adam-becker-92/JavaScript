const hash = {};

const task2 = [
    ["Brisbane, Australia"],
    ["Hiroshima, Japan"],
    ["Birmingham, United Kingdom"],
    ["Auckland, New Zealand"],
    ["Christchurch, New Zealand"],
    ["Cairns, Australia"],
    ["Osaka, Japan"],
    ["Bristol, United Kingdom"],
    ["Cardiff, Wales, United Kingdom"],
    ["Edinburgh, Scotland, United Kingdom"],
    ["London, England, UK"],
    ["Manchester, England, UK"],
    ["Dunedin, New Zealand"],
    ["Wellington, New Zealand"],
    ["Melbourne, Australia"],
    ["Perth, Australia"],
    ["Sydney, Australia"],
    ["Kyoto, Japan"],
    ["Tokyo, Japan"],
    ["Brisbane, Australia"]
  ];

const addCountryToHash = (array) => {
    let city = array[0], country, group;

    if(array.length > 2) {
        country = array[2];
        group = array[1];
    } else {
        country = array[1];
    }

    if(country === 'UK') {
        country = 'United Kingdom';
    }
        
    if (!hash[country]) {
        hash[country] = city;
        return
    }

    const cities = hash[country];
    const updatedCities = `${cities}, ${city}${group ? `(${group})` : ''}`;

    hash[country] = updatedCities;
}

const formattedCountries = task2
    .map((val) => val[0].split(', '))
    .forEach(addCountryToHash);

console.log(hash);