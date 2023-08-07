function populationGrowth(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = p0 + p0 * (percent / 100) + aug;
        years++;
    }
    return years;
}

const startingPopulation = 1000;
const annualGrowthPercent = 2;
const newcomersPerYear = 50;
const targetPopulation = 1200;

const yearsNeeded = populationGrowth(startingPopulation, annualGrowthPercent, newcomersPerYear, targetPopulation);
console.log(`${yearsNeeded} `);
