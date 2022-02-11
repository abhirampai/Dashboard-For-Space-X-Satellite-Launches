const DatePicker = () => {
  return (
    <>
      <button className="flex gap-x-2 items-center hover:bg-gray-100">
        <i className="ri-calendar-line" />
        <span className="text-sm">Past 6 months</span>
      </button>
    </>
  );
};

export default DatePicker;
