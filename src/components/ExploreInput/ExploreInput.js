import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import {ReactComponent as ProLogo} from '../../assets/proceed.svg';
import './ExploreInput.css'

const ExploreInput = () => {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });

  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="exploreInput">
      <div className="datePicker">
        <DateRangePicker withPortal autoFocus
          startDate={dates.startDate} // momentPropTypes.momentObj or null,
          startDateId="exploreStartDate" // PropTypes.string.isRequired,
          endDate={dates.endDate} // momentPropTypes.momentObj or null,
          endDateId="exploreEndDate" // PropTypes.string.isRequired,
          onDatesChange={(dates) => setDates(dates)} // PropTypes.func.isRequired,
          focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          noBorder
          customArrowIcon={null}
        />
      </div>
      <button className="proceedBtn">
        <span className="proceed">PROCEED</span>
        <ProLogo className="proLogo" />
      </button>
    </div>
  );
};

export default ExploreInput;
