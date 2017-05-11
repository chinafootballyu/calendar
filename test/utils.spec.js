import {
    expect
} from 'chai';
import {
    getStartDayWeek,
    getDays,
    getPrevMonth,
    getNextMonth
} from '../src/utils.js';
// month 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// week 0, 1, 2, 3, 4, 5, 6
describe('utils', function () {
    it('getStartDayWeek', function () {
        expect(getStartDayWeek(2017, 5)).equal(1);
        expect(getStartDayWeek(2016, 5)).equal(0);
        expect(getStartDayWeek(2008, 2)).equal(5);
    });
    it('getDays', function () {
        expect(getDays(2019, 7)).equal(31);
        expect(getDays(2040, 4)).equal(30);
        expect(getDays(2015, 2)).equal(28);
        expect(getDays(2008, 2)).equal(29);
    });
    it('getPrevMonth', function () {
        expect(getPrevMonth(2015, 2)).eql({
            year: 2015,
            month: 1
        });
        expect(getPrevMonth(2010, 1)).eql({
            year: 2009,
            month: 12
        });
        expect(getPrevMonth(2000, 12)).eql({
            year: 2000,
            month: 11
        });
    });
    it('getNextMonth', function () {
        expect(getNextMonth(2015, 2)).eql({
            year: 2015,
            month: 3
        });
        expect(getNextMonth(2010, 1)).eql({
            year: 2010,
            month: 2
        });
        expect(getNextMonth(2000, 12)).eql({
            year: 2001,
            month: 1
        });
    });
});

