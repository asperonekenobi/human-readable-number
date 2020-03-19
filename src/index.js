module.exports = function toReadable(number) {

    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let res = '';

    if (number == 0) {
        return unit[0];
    }
    //сотни
    if ((number - number % 100) / 100 >= 1) {
        res = res + unit[(number - number % 100) / 100] + ' hundred';
        number = number % 100;
    }

    if (number > 0 && number < 20) {
        res = res + ' ' + unit[number];
    } else
        //десятки
        if (number >= 20) {
            res = res + ' ' + dozens[((number - number % 10) / 10) - 2];
            number = number % 10;
            //единицы
            if (number > 0) {
                res = res + ' ' + unit[number];
            }
        }
    return res.trim(); //Обрезать с 2-ух сторон для двузначных, тесты валятся

}
