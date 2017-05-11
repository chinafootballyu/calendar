import {
    expect
} from 'chai';
import calendar from '../src/index.js';

describe('calendar', function () {
    it('202012', function () {
        expect(calendar.generate(2020, 12)).eql([
            [
                {
                    year: 2020,
                    month: 11,
                    day: 29
                },
                {
                    year: 2020,
                    month: 11,
                    day: 30
                },
                {
                    year: 2020,
                    month: 12,
                    day: 1
                },
                {
                    year: 2020,
                    month: 12,
                    day: 2
                },
                {
                    year: 2020,
                    month: 12,
                    day: 3
                },
                {
                    year: 2020,
                    month: 12,
                    day: 4
                },
                {
                    year: 2020,
                    month: 12,
                    day: 5
                },
            ],
            [
                {
                    year: 2020,
                    month: 12,
                    day: 6
                },
                {
                    year: 2020,
                    month: 12,
                    day: 7
                },
                {
                    year: 2020,
                    month: 12,
                    day: 8
                },
                {
                    year: 2020,
                    month: 12,
                    day: 9
                },
                {
                    year: 2020,
                    month: 12,
                    day: 10
                },
                {
                    year: 2020,
                    month: 12,
                    day: 11
                },
                {
                    year: 2020,
                    month: 12,
                    day: 12
                },
            ],
            [
                {
                    year: 2020,
                    month: 12,
                    day: 13
                },
                {
                    year: 2020,
                    month: 12,
                    day: 14
                },
                {
                    year: 2020,
                    month: 12,
                    day: 15
                },
                {
                    year: 2020,
                    month: 12,
                    day: 16
                },
                {
                    year: 2020,
                    month: 12,
                    day: 17
                },
                {
                    year: 2020,
                    month: 12,
                    day: 18
                },
                {
                    year: 2020,
                    month: 12,
                    day: 19
                },
            ],
            [
                {
                    year: 2020,
                    month: 12,
                    day: 20
                },
                {
                    year: 2020,
                    month: 12,
                    day: 21
                },
                {
                    year: 2020,
                    month: 12,
                    day: 22
                },
                {
                    year: 2020,
                    month: 12,
                    day: 23
                },
                {
                    year: 2020,
                    month: 12,
                    day: 24
                },
                {
                    year: 2020,
                    month: 12,
                    day: 25
                },
                {
                    year: 2020,
                    month: 12,
                    day: 26
                },
            ],
            [
                {
                    year: 2020,
                    month: 12,
                    day: 27
                },
                {
                    year: 2020,
                    month: 12,
                    day: 28
                },
                {
                    year: 2020,
                    month: 12,
                    day: 29
                },
                {
                    year: 2020,
                    month: 12,
                    day: 30
                },
                {
                    year: 2020,
                    month: 12,
                    day: 31
                },
                {
                    year: 2021,
                    month: 1,
                    day: 1
                },
                {
                    year: 2021,
                    month: 1,
                    day: 2
                },
            ],
            [
                {
                    year: 2021,
                    month: 1,
                    day: 3
                },
                {
                    year: 2021,
                    month: 1,
                    day: 4
                },
                {
                    year: 2021,
                    month: 1,
                    day: 5
                },
                {
                    year: 2021,
                    month: 1,
                    day: 6
                },
                {
                    year: 2021,
                    month: 1,
                    day: 7
                },
                {
                    year: 2021,
                    month: 1,
                    day: 8
                },
                {
                    year: 2021,
                    month: 1,
                    day: 9
                },
            ],
        ]);
    });
    it('201705', function () {
        expect(calendar.generate(2017, 5)).eql([
            [
                {
                    year: 2017,
                    month: 4,
                    day: 30
                },
                {
                    year: 2017,
                    month: 5,
                    day: 1
                },
                {
                    year: 2017,
                    month: 5,
                    day: 2
                },
                {
                    year: 2017,
                    month: 5,
                    day: 3
                },
                {
                    year: 2017,
                    month: 5,
                    day: 4
                },
                {
                    year: 2017,
                    month: 5,
                    day: 5
                },
                {
                    year: 2017,
                    month: 5,
                    day: 6
                },
            ],
            [
                {
                    year: 2017,
                    month: 5,
                    day: 7
                },
                {
                    year: 2017,
                    month: 5,
                    day: 8
                },
                {
                    year: 2017,
                    month: 5,
                    day: 9
                },
                {
                    year: 2017,
                    month: 5,
                    day: 10
                },
                {
                    year: 2017,
                    month: 5,
                    day: 11
                },
                {
                    year: 2017,
                    month: 5,
                    day: 12
                },
                {
                    year: 2017,
                    month: 5,
                    day: 13
                },
            ],
            [
                {
                    year: 2017,
                    month: 5,
                    day: 14
                },
                {
                    year: 2017,
                    month: 5,
                    day: 15
                },
                {
                    year: 2017,
                    month: 5,
                    day: 16
                },
                {
                    year: 2017,
                    month: 5,
                    day: 17
                },
                {
                    year: 2017,
                    month: 5,
                    day: 18
                },
                {
                    year: 2017,
                    month: 5,
                    day: 19
                },
                {
                    year: 2017,
                    month: 5,
                    day: 20
                },
            ],
            [
                {
                    year: 2017,
                    month: 5,
                    day: 21
                },
                {
                    year: 2017,
                    month: 5,
                    day: 22
                },
                {
                    year: 2017,
                    month: 5,
                    day: 23
                },
                {
                    year: 2017,
                    month: 5,
                    day: 24
                },
                {
                    year: 2017,
                    month: 5,
                    day: 25
                },
                {
                    year: 2017,
                    month: 5,
                    day: 26
                },
                {
                    year: 2017,
                    month: 5,
                    day: 27
                },
            ],
            [
                {
                    year: 2017,
                    month: 5,
                    day: 28
                },
                {
                    year: 2017,
                    month: 5,
                    day: 29
                },
                {
                    year: 2017,
                    month: 5,
                    day: 30
                },
                {
                    year: 2017,
                    month: 5,
                    day: 31
                },
                {
                    year: 2017,
                    month: 6,
                    day: 1
                },
                {
                    year: 2017,
                    month: 6,
                    day: 2
                },
                {
                    year: 2017,
                    month: 6,
                    day: 3
                },
            ],
            [
                {
                    year: 2017,
                    month: 6,
                    day: 4
                },
                {
                    year: 2017,
                    month: 6,
                    day: 5
                },
                {
                    year: 2017,
                    month: 6,
                    day: 6
                },
                {
                    year: 2017,
                    month: 6,
                    day: 7
                },
                {
                    year: 2017,
                    month: 6,
                    day: 8
                },
                {
                    year: 2017,
                    month: 6,
                    day: 9
                },
                {
                    year: 2017,
                    month: 6,
                    day: 10
                },
            ],
        ]);
    });
    it('200802', function () {
        expect(calendar.generate(2008, 2)).eql([
            [
                {
                    year: 2008,
                    month: 1,
                    day: 27
                },
                {
                    year: 2008,
                    month: 1,
                    day: 28
                },
                {
                    year: 2008,
                    month: 1,
                    day: 29
                },
                {
                    year: 2008,
                    month: 1,
                    day: 30
                },
                {
                    year: 2008,
                    month: 1,
                    day: 31
                },
                {
                    year: 2008,
                    month: 2,
                    day: 1
                },
                {
                    year: 2008,
                    month: 2,
                    day: 2
                },
            ],
            [
                {
                    year: 2008,
                    month: 2,
                    day: 3
                },
                {
                    year: 2008,
                    month: 2,
                    day: 4
                },
                {
                    year: 2008,
                    month: 2,
                    day: 5
                },
                {
                    year: 2008,
                    month: 2,
                    day: 6
                },
                {
                    year: 2008,
                    month: 2,
                    day: 7
                },
                {
                    year: 2008,
                    month: 2,
                    day: 8
                },
                {
                    year: 2008,
                    month: 2,
                    day: 9
                },
            ],
            [
                {
                    year: 2008,
                    month: 2,
                    day: 10
                },
                {
                    year: 2008,
                    month: 2,
                    day: 11
                },
                {
                    year: 2008,
                    month: 2,
                    day: 12
                },
                {
                    year: 2008,
                    month: 2,
                    day: 13
                },
                {
                    year: 2008,
                    month: 2,
                    day: 14
                },
                {
                    year: 2008,
                    month: 2,
                    day: 15
                },
                {
                    year: 2008,
                    month: 2,
                    day: 16
                },
            ],
            [
                {
                    year: 2008,
                    month: 2,
                    day: 17
                },
                {
                    year: 2008,
                    month: 2,
                    day: 18
                },
                {
                    year: 2008,
                    month: 2,
                    day: 19
                },
                {
                    year: 2008,
                    month: 2,
                    day: 20
                },
                {
                    year: 2008,
                    month: 2,
                    day: 21
                },
                {
                    year: 2008,
                    month: 2,
                    day: 22
                },
                {
                    year: 2008,
                    month: 2,
                    day: 23
                },
            ],
            [
                {
                    year: 2008,
                    month: 2,
                    day: 24
                },
                {
                    year: 2008,
                    month: 2,
                    day: 25
                },
                {
                    year: 2008,
                    month: 2,
                    day: 26
                },
                {
                    year: 2008,
                    month: 2,
                    day: 27
                },
                {
                    year: 2008,
                    month: 2,
                    day: 28
                },
                {
                    year: 2008,
                    month: 2,
                    day: 29
                },
                {
                    year: 2008,
                    month: 3,
                    day: 1
                },
            ],
            [
                {
                    year: 2008,
                    month: 3,
                    day: 2
                },
                {
                    year: 2008,
                    month: 3,
                    day: 3
                },
                {
                    year: 2008,
                    month: 3,
                    day: 4
                },
                {
                    year: 2008,
                    month: 3,
                    day: 5
                },
                {
                    year: 2008,
                    month: 3,
                    day: 6
                },
                {
                    year: 2008,
                    month: 3,
                    day: 7
                },
                {
                    year: 2008,
                    month: 3,
                    day: 8
                },
            ],
        ]);
    });
    it('200001', function () {
        expect(calendar.generate(2000, 1)).eql([
            [
                {
                    year: 1999,
                    month: 12,
                    day: 26
                },
                {
                    year: 1999,
                    month: 12,
                    day: 27
                },
                {
                    year: 1999,
                    month: 12,
                    day: 28
                },
                {
                    year: 1999,
                    month: 12,
                    day: 29
                },
                {
                    year: 1999,
                    month: 12,
                    day: 30
                },
                {
                    year: 1999,
                    month: 12,
                    day: 31
                },
                {
                    year: 2000,
                    month: 1,
                    day: 1
                },
            ],
            [
                {
                    year: 2000,
                    month: 1,
                    day: 2
                },
                {
                    year: 2000,
                    month: 1,
                    day: 3
                },
                {
                    year: 2000,
                    month: 1,
                    day: 4
                },
                {
                    year: 2000,
                    month: 1,
                    day: 5
                },
                {
                    year: 2000,
                    month: 1,
                    day: 6
                },
                {
                    year: 2000,
                    month: 1,
                    day: 7
                },
                {
                    year: 2000,
                    month: 1,
                    day: 8
                },
            ],
            [
                {
                    year: 2000,
                    month: 1,
                    day: 9
                },
                {
                    year: 2000,
                    month: 1,
                    day: 10
                },
                {
                    year: 2000,
                    month: 1,
                    day: 11
                },
                {
                    year: 2000,
                    month: 1,
                    day: 12
                },
                {
                    year: 2000,
                    month: 1,
                    day: 13
                },
                {
                    year: 2000,
                    month: 1,
                    day: 14
                },
                {
                    year: 2000,
                    month: 1,
                    day: 15
                },
            ],
            [
                {
                    year: 2000,
                    month: 1,
                    day: 16
                },
                {
                    year: 2000,
                    month: 1,
                    day: 17
                },
                {
                    year: 2000,
                    month: 1,
                    day: 18
                },
                {
                    year: 2000,
                    month: 1,
                    day: 19
                },
                {
                    year: 2000,
                    month: 1,
                    day: 20
                },
                {
                    year: 2000,
                    month: 1,
                    day: 21
                },
                {
                    year: 2000,
                    month: 1,
                    day: 22
                },
            ],
            [
                {
                    year: 2000,
                    month: 1,
                    day: 23
                },
                {
                    year: 2000,
                    month: 1,
                    day: 24
                },
                {
                    year: 2000,
                    month: 1,
                    day: 25
                },
                {
                    year: 2000,
                    month: 1,
                    day: 26
                },
                {
                    year: 2000,
                    month: 1,
                    day: 27
                },
                {
                    year: 2000,
                    month: 1,
                    day: 28
                },
                {
                    year: 2000,
                    month: 1,
                    day: 29
                },
            ],
            [
                {
                    year: 2000,
                    month: 1,
                    day: 30
                },
                {
                    year: 2000,
                    month: 1,
                    day: 31
                },
                {
                    year: 2000,
                    month: 2,
                    day: 1
                },
                {
                    year: 2000,
                    month: 2,
                    day: 2
                },
                {
                    year: 2000,
                    month: 2,
                    day: 3
                },
                {
                    year: 2000,
                    month: 2,
                    day: 4
                },
                {
                    year: 2000,
                    month: 2,
                    day: 5
                },
            ],
        ]);
    });
    it('202011', function () {
        expect(calendar.generate(2020, 11)).eql([
            [
                {
                    year: 2020,
                    month: 10,
                    day: 25
                },
                {
                    year: 2020,
                    month: 10,
                    day: 26
                },
                {
                    year: 2020,
                    month: 10,
                    day: 27
                },
                {
                    year: 2020,
                    month: 10,
                    day: 28
                },
                {
                    year: 2020,
                    month: 10,
                    day: 29
                },
                {
                    year: 2020,
                    month: 10,
                    day: 30
                },
                {
                    year: 2020,
                    month: 10,
                    day: 31
                },
            ],
            [
                {
                    year: 2020,
                    month: 11,
                    day: 1
                },
                {
                    year: 2020,
                    month: 11,
                    day: 2
                },
                {
                    year: 2020,
                    month: 11,
                    day: 3
                },
                {
                    year: 2020,
                    month: 11,
                    day: 4
                },
                {
                    year: 2020,
                    month: 11,
                    day: 5
                },
                {
                    year: 2020,
                    month: 11,
                    day: 6
                },
                {
                    year: 2020,
                    month: 11,
                    day: 7
                },
            ],
            [
                {
                    year: 2020,
                    month: 11,
                    day: 8
                },
                {
                    year: 2020,
                    month: 11,
                    day: 9
                },
                {
                    year: 2020,
                    month: 11,
                    day: 10
                },
                {
                    year: 2020,
                    month: 11,
                    day: 11
                },
                {
                    year: 2020,
                    month: 11,
                    day: 12
                },
                {
                    year: 2020,
                    month: 11,
                    day: 13
                },
                {
                    year: 2020,
                    month: 11,
                    day: 14
                },
            ],
            [
                {
                    year: 2020,
                    month: 11,
                    day: 15
                },
                {
                    year: 2020,
                    month: 11,
                    day: 16
                },
                {
                    year: 2020,
                    month: 11,
                    day: 17
                },
                {
                    year: 2020,
                    month: 11,
                    day: 18
                },
                {
                    year: 2020,
                    month: 11,
                    day: 19
                },
                {
                    year: 2020,
                    month: 11,
                    day: 20
                },
                {
                    year: 2020,
                    month: 11,
                    day: 21
                },
            ],
            [
                {
                    year: 2020,
                    month: 11,
                    day: 22
                },
                {
                    year: 2020,
                    month: 11,
                    day: 23
                },
                {
                    year: 2020,
                    month: 11,
                    day: 24
                },
                {
                    year: 2020,
                    month: 11,
                    day: 25
                },
                {
                    year: 2020,
                    month: 11,
                    day: 26
                },
                {
                    year: 2020,
                    month: 11,
                    day: 27
                },
                {
                    year: 2020,
                    month: 11,
                    day: 28
                },
            ],
            [
                {
                    year: 2020,
                    month: 11,
                    day: 29
                },
                {
                    year: 2020,
                    month: 11,
                    day: 30
                },
                {
                    year: 2020,
                    month: 12,
                    day: 1
                },
                {
                    year: 2020,
                    month: 12,
                    day: 2
                },
                {
                    year: 2020,
                    month: 12,
                    day: 3
                },
                {
                    year: 2020,
                    month: 12,
                    day: 4
                },
                {
                    year: 2020,
                    month: 12,
                    day: 5
                },
            ],
        ]);
    });
});

