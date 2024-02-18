import React from "react";

function DateTimePretty(Component) {
  return function hocComponent(props) {
    let time = new Date(props.date);
    let hours = time.getTime() / 1000 / 60 / 60;
    let now = new Date();
    let nowHours = now.getTime() / 1000 / 60 / 60;
    let diff = nowHours - hours;
    let result;
    
    if (diff < 1) {
      result = `${(diff * 60).toFixed()} минут назад`
    } else if (diff > 1 && diff < 24) {
      result = `${diff.toFixed()} часов назад`
    } else if (diff > 24) {
      result = `${(diff / 24).toFixed()} дней назад`
    }
    return <Component date={result} />
  };
}

export default DateTimePretty;
