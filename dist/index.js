const getStartDayWeek = function (year, month) {
    return new Date(year, month - 1, 1).getDay();
};

const getDays = function (year, month) {
    return new Date(year, month, 0).getDate();
};

const getPrevMonth = function (year, month) {
    let obj = {
        year: year,
        month: month - 1
    };

    if (month === 1) {
        obj.year = year - 1;
        obj.month = 12;
    }

    return obj;
};

const getNextMonth = function (year, month) {
    let obj = {
        year: year,
        month: month + 1
    };

    if (month === 12) {
        obj.year = year + 1;
        obj.month = 1;
    }

    return obj;
};

var index = {
    monthDays (year, month) {
        const prev = getPrevMonth(year, month);
        const prevDays = getDays(prev.year, prev.month);
        const next = getNextMonth(year, month);
        const startWeek = getStartDayWeek(year, month);
        const curDays = getDays(year, month);
        const prevDiff = startWeek === 0 ? 7 : startWeek;
        const curEnd = prevDiff + curDays;
        const arrs = [ ];
        let arr = [ ];
        // 6行 * 7日 = 42格
        for (let i = 0; i < 42; i++) {
            if (i % 7 === 0) {
                arr = [ ];
                arrs.push(arr);
            }

            if (i < prevDiff) {
                arr.push({
                    year: prev.year,
                    month: prev.month,
                    day: prevDays - prevDiff + i + 1
                });
            } else if ( i >= prevDiff && i < curEnd) {
                arr.push({
                    year: year,
                    month: month,
                    day: i - prevDiff + 1
                });
            } else {
                arr.push({
                    year: next.year,
                    month: next.month,
                    day: i - curEnd + 1
                });
            }
            
        }

        return arrs;
    }
};

export default index;
