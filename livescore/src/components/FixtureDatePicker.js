import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import FORWARD from "../assets/images/forward.png";
import BACKWARD from "../assets/images/backward.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function FixtureDatePicker({}) {
  const [matchDate, setMatchDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDecrement = () => {
    const newDate = new Date(matchDate);
    newDate.setDate(matchDate.getDate() - 1);
    setMatchDate(newDate);
  };
  const handleIncrement = () => {
    const newDate = new Date(matchDate);
    newDate.setDate(matchDate.getDate() + 1);
    setMatchDate(newDate);
  };

  return (
    <div
      align="center"
      data-theme="synthwave"
      className="flex content-center justify-center w-full rounded-t-2xl"
    >
      <div>
        <button onClick={handleDecrement} className="mt-2 mr-40 btn btn-ghost">
          <img src={BACKWARD} alt={"BACKWARD"}></img>
        </button>
      </div>

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
      <div>
        <div>
          <button
            onClick={handleIncrement}
            className="mt-2 ml-40 btn btn-ghost"
          >
            <img src={FORWARD} alt={"FORWARD"}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default FixtureDatePicker;
