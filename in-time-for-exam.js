function timeToExamLiveExample (inputArray) {
    let examHour = Number(inputArray[0]);
    let examMinute = Number(inputArray[1]);
    let arrivalHour = Number(inputArray[2]);
    let arrivalMinute = Number(inputArray[3]);

    let examHourAsMinutes = examHour * 60;
    let arrivalHourAsMinutes = arrivalHour * 60;

    let allExamMinutes = examHourAsMinutes + examMinute;
    let allArrivalMinutes = arrivalHourAsMinutes + arrivalMinute;

    if (allExamMinutes === allArrivalMinutes) {
        console.log('On time');
    } else {
        if (allArrivalMinutes > allExamMinutes) {
            console.log('Late');
        } else if (allArrivalMinutes + 30 < allExamMinutes) {
            console.log('Early');
        } else {
            console.log('On time');
        }

        let rawDifference = allArrivalMinutes - allExamMinutes;
        let isLate = rawDifference > 0;
        let difference = Math.abs(rawDifference);
        if (difference >= 60) {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;
            if (minutes <= 9) {
                minutes = `0${minutes}`;
            }

            if (isLate) {
                console.log(`${hours}:${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            if (isLate) {
                console.log(`${difference} minutes after the start`);
            } else {
                console.log(`${difference} minutes before the start`);
            }
        }
    }
}
