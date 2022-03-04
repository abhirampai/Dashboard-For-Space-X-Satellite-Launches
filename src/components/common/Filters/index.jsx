import DatePicker from "./DatePicker";
import StatusFilter from "./StatusFilter";

const Filters = ({ statusFilter, setStatusFilter }) => {
  return (
    <>
      <div className="flex justify-between">
        <DatePicker />
        <StatusFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>
    </>
  );
};

export default Filters;
