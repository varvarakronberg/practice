function getRandomDate() {
    var startDate = new Date(2018, 0, 1);
    var randomDayNumber = Math.floor(Math.random() * 365);
    startDate.setDate(startDate.getDate() + randomDayNumber);
    return startDate;
}
console.log(getRandomDate());