import ReactDatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DatePicker = ({ selectedDate, onChange, minDate, maxDate }) => {
  console.log({ selectedDate });
  return (
    <ReactDatePicker
      onChange={onChange}
      value={selectedDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};

export default DatePicker;
