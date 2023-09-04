import { format } from "date-fns";

export const COLUMNS = [
  // {
  //   Header: "id",
  //   accessor: "id",
  //   disableFilters: true
  // },
  {
    Header: "Photo",
    accessor: "photo",
    disableFilters: true,
    Cell: tableProps => (
      <img
        src={tableProps.row.original.photo}
        width={60}
        alt="https://resources.premierleague.com/premierleague/photos/players/250x250/p113534.png"
      />
    )
  },
  {
    Header: "Team",
    accessor: "team_name",
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    disableFilters: true,
  },
  {
    Header: "Second Name",
    accessor: "second_name",
    disableFilters: true,
  },
  {
    Header: "Goals",
    accessor: "goals_scored",
    disableFilters: true,
  },
  {
    Header: "Points",
    accessor: "total_points",
    disableFilters: true,
  },

];
