import { STATUS_FILTERS } from "./constants";

const StatusFilter = ({ statusFilter, setStatusFilter }) => {
  return (
    <div class="group inline-block">
      <button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex gap-x-2 items-center min-w-48">
        <i className="ri-filter-line" />
        <span class="pr-1 font-semibold flex-1">{statusFilter}</span>
        <span>
          <svg
            class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 fixed 
  transition duration-150 ease-in-out origin-top min-w-48"
      >
        {STATUS_FILTERS.map((status) => (
          <li
            class="rounded-sm px-3 py-1 hover:bg-gray-100 hover:cursor-pointer"
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusFilter;
