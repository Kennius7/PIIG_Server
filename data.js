module.exports.getdateNumber = (dateString) => {
    const dateNumber = new Date(dateString).getUTCDate();
    return dateNumber;
}

module.exports.getFullDayFunction = (dateString) => {
    const dayStringData = new Date(dateString).toUTCString();
    const isSundayIncluded = dayStringData.includes("Sun");
    const isMondayIncluded = dayStringData.includes("Mon");
    const isTuesdayIncluded = dayStringData.includes("Tue");
    const isWednesdayIncluded = dayStringData.includes("Wed");
    const isThursdayIncluded = dayStringData.includes("Thu");
    const isFridayIncluded = dayStringData.includes("Fri");
    const isSaturdayIncluded = dayStringData.includes("Sat");
    if (isSundayIncluded) {
        return "Sunday";
    }
    if (isMondayIncluded) {
        return "Monday";
    }
    if (isTuesdayIncluded) {
        return "Tuesday";
    }
    if (isWednesdayIncluded) {
        return "Wednesday";
    }
    if (isThursdayIncluded) {
        return "Thursday";
    }
    if (isFridayIncluded) {
        return "Friday";
    }
    if (isSaturdayIncluded) {
        return "Saturday";
    }
}

module.exports.getFullMonthFunction = (dateString) => {
    const monthStringData = new Date(dateString).toUTCString();
    const isJanuaryIncluded = monthStringData.includes("Jan");
    const isFebruaryIncluded = monthStringData.includes("Feb");
    const isMarchIncluded = monthStringData.includes("Mar");
    const isAprilIncluded = monthStringData.includes("Apr");
    const isMayIncluded = monthStringData.includes("May");
    const isJuneIncluded = monthStringData.includes("Jun");
    const isJulyIncluded = monthStringData.includes("Jul");
    const isAugustIncluded = monthStringData.includes("Aug");
    const isSeptemberIncluded = monthStringData.includes("Sep");
    const isOctoberIncluded = monthStringData.includes("Oct");
    const isNovemberIncluded = monthStringData.includes("Nov");
    const isDecemberIncluded = monthStringData.includes("Dec");
    if (isJanuaryIncluded) {
        return "January";
    }
    if (isFebruaryIncluded) {
        return "February";
    }
    if (isMarchIncluded) {
        return "March";
    }
    if (isAprilIncluded) {
        return "April";
    }
    if (isMayIncluded) {
        return "May";
    }
    if (isJuneIncluded) {
        return "June";
    }
    if (isJulyIncluded) {
        return "July";
    }
    if (isAugustIncluded) {
        return "August";
    }
    if (isSeptemberIncluded) {
        return "September";
    }
    if (isOctoberIncluded) {
        return "October";
    }
    if (isNovemberIncluded) {
        return "November";
    }
    if (isDecemberIncluded) {
        return "December";
    }
}

module.exports.getYear = (dateString) => {
    const fullYear = new Date(dateString).getUTCFullYear();
    return fullYear;
}

module.exports.monthFunct = (mon) => {
    if (mon <= 9) {
        return `0${mon + 1}`;
    } else return mon;
}

module.exports.dayFunct = (day) => {
    if (day <= 9) {
        return `0${day}`;
    } else return day;
}

module.exports.hourFunct = (hr) => {
    if (hr <= 9) {
        return `0${hr}`;
    } else return hr;
}

module.exports.minuteFunct = (min) => {
    if (min <= 9) {
        return `0${min}`;
    } else return min;
}

module.exports.secFunct = (sec) => {
    if (sec <= 9) {
        return `0${sec}`;
    } else return sec;
}


