export const getStartDayWeek = function (year, month) {
    return new Date(year, month - 1, 1).getDay();
};

export const getDays = function (year, month) {
    return new Date(year, month, 0).getDate();
};

export const getPrevMonth = function (year, month) {
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

export const getNextMonth = function (year, month) {
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
