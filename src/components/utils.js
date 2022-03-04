export const filterByStatus = (status, data) => {
  switch (status) {
    case "All launches":
      return data;
    case "Upcoming launches":
      return data.filter((launch) => launch.upcoming);
    case "Failed launches":
      return data.filter(
        (launch) => !launch.launch_success && !launch.upcoming
      );
    case "Successful launches":
      return data.filter((launch) => launch.launch_success);
    default:
      return data;
  }
};
