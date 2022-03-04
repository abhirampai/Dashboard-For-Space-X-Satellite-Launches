export const filterByStatus = (status, launches) => {
  switch (status) {
    case "All launches":
      return launches;
    case "Upcoming launches":
      return launches.filter((launch) => launch.upcoming);
    case "Failed launches":
      return launches.filter(
        (launch) => !launch.launch_success && !launch.upcoming
      );
    case "Successful launches":
      return launches.filter((launch) => launch.launch_success);
    default:
      return launches;
  }
};
