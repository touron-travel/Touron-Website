import React from "react";
import "./TouristDate.css";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";

const TouristDate = ({ imgSrc, fromDate, toDate, setFromDate, setToDate }) => {
  console.log("fromDate :>> ", fromDate);
  console.log("toDate :>> ", toDate);
  return (
    <DateRangePicker
      startDate={fromDate}
      endDate={toDate}
      onStartDateChange={setFromDate}
      onEndDateChange={setToDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <>
          <div className="date-range">
            <img src={imgSrc} alt="" />

            <div className="date-container">
              <input
                className={"input" + (focus === START_DATE ? " -focused" : "")}
                {...startDateInputProps}
                placeholder="Start date"
              />
              <span className="date-range_arrow" />
              <input
                className={"input" + (focus === END_DATE ? " -focused" : "")}
                {...endDateInputProps}
                placeholder="End date"
              />
            </div>
          </div>
        </>
      )}
    </DateRangePicker>
  );
};

export default TouristDate;
