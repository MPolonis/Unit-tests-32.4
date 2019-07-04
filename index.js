const formatDate = (timeInSeconds = 0) => {
    const time = Math.floor(parseFloat(timeInSeconds));
    const hours = Math.floor(time / 60 / 60);
    const showHours = hours === 0 ? '' : `${hours}h`;
    const minutes = Math.floor(time / 60) % 60;
    const showMinutes = minutes === 0 ? '' : `${minutes}m`;
    const seconds = Math.floor(time - (minutes * 60) - (hours * 3600));
    const showSeconds = seconds === 0 && (minutes !== 0 || hours !== 0) ? '' : `${seconds}s`

    return `${showHours}${showHours && (showMinutes || showSeconds) ? ' ' : ''}${showMinutes}${showMinutes && showSeconds ? ' ' : ''}${showSeconds}`;
}

module.exports = formatDate;