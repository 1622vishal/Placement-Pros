import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants.js";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#15202B', top: 0, justifyContent: "space-between" }}>
    <h1>Placement Pros</h1>
    <SearchBar />
  </Stack>
);

export default Navbar;