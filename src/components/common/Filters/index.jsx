import DatePicker from "./DatePicker";
import StatusFilter from "./StatusFilter";

const Filters = () => {
  return (
    <>
      <div className="flex justify-between">
        <DatePicker />
        <StatusFilter />
      </div>
    </>
  );
};

export default Filters;
