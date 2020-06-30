import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { ReactComponent as ProLogo } from "../../assets/proceed.svg";
import "./ExploreInput.css";

const ExploreInput = ({ setAsteroids, setIsToday }) => {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { startDate, endDate } = dates;
    if (startDate && endDate) {
      const sd = startDate.format("YYYY-MM-DD");
      const ed = endDate.format("YYYY-MM-DD");
      fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${sd}&end_date=${ed}&api_key=DEMO_KEY`
      )
        .then((res) => res.json())
        .then((res) => {
          setAsteroids(
            Object.values(res.near_earth_objects).reduce(
              (acc, curr) => acc.concat(curr),
              []
            )
          );
          setIsToday(false);
        });
    }
  };

  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <form className="exploreInput" onSubmit={handleSubmit}>
      <div className="datePicker">
        <DateRangePicker
          withPortal
          startDate={dates.startDate} // momentPropTypes.momentObj or null,
          startDateId="exploreStartDate" // PropTypes.string.isRequired,
          endDate={dates.endDate} // momentPropTypes.momentObj or null,
          endDateId="exploreEndDate" // PropTypes.string.isRequired,
          onDatesChange={(dates) => setDates(dates)} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          isOutsideRange={(date) => {
            if (dates.startDate) {
              const validDate = moment(dates.startDate.format()).add(7, "d");
              if (date.isBefore(validDate, "day")) return false;
              return true;
            }
            return false;
          }}
          noBorder
          customArrowIcon={null}
        />
      </div>
      <button className="proceedBtn" type="submit">
        <span className="proceed">PROCEED</span>
        <ProLogo className="proLogo" />
      </button>
    </form>
  );
};

export default ExploreInput;
