import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function FixtureDatePicker({}) {
  const [matchDate, setMatchDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      align="center"
      data-theme="synthwave"
      className="flex content-center justify-center w-full"
    >
      <DatePicker
        selected={matchDate}
        onChange={(date) => setMatchDate(date)}
        dateFormat={"d MMMM yyyy"}
        className="w-20 h-12  invisible my-2"
        open={open}
        onClickOutside={handleClose}
        showPopperArrow={false}
        popperClassName="ng-primary"
        popperPlacement="bottom"
        align="center"
      />
      <button
        className="btn btn-ghost normal-case text-3xl absolute my-2"
        onClick={handleOpen}
      >
        {matchDate.getDate() === new Date().getDate()
          ? "Today"
          : matchDate.toLocaleDateString("en-GB", {
              timeZone: "UTC",
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
      </button>
    </div>
  );
}
export default FixtureDatePicker;
