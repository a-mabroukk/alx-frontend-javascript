export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
    expansion1989 = expansion1989 === undefined ? "Default User" : expansion1989
    
    expansion2019 = expansion2019 === undefined ? "Default User" : expansion2019

    return initialNumber + expansion1989 + expansion2019;
  }