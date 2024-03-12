import React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TuneIcon from "@mui/icons-material/Tune";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//it is important to place Box import after other MUI import else gives error "createTheme_default is not a function"
import Box from "@mui/material/Box";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const lob = ["Lob1", "Lob2", "Lob3", "Lob4", "Lob5", "Lob6", "Lob7"]

const status = ["Active" , "Inactive"]

function getStyles(name, lobName, theme) {
  return {
    fontWeight:
      lobName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FiltersOffCanvas() {
  const theme = useTheme();
  const [lobName, setLobName] = React.useState([]);
  const [statusName, setStatusName] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleChangeLob = (event) => {
    const {
      target: { value },
    } = event;
    //   console.log(value);
    setLobName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
      // value
    );
  };
  console.log(lobName);

  const handleChangeStatus = (event) => {
    const {
      target: { value },
    } = event;
    setStatusName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
      // value
    );
  };
  console.log(statusName);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: !state[anchor] });
  };

  const applyHandler = (anchor) => () => {
    //store the values of filter here
    setState({ ...state, [anchor]: false });
    setOpen(!open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        height: 1000,
        backgroundColor: "#EEEEEE",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* lob selection */}
      <div>
        <FormControl sx={{ m: 1, width: 280 }}>
          <InputLabel id="lob-multiple-name-label">Lob</InputLabel>
          <Select
            labelId="lob-multiple-name-label"
            id="lob-multiple-name"
            multiple
            value={lobName}
            onChange={handleChangeLob}
            input={<OutlinedInput label="lobName" />}
            MenuProps={MenuProps}
          >
            {lob.map((items) => (
              <MenuItem
                key={items}
                value={items}
                style={getStyles(items, lobName, theme)}
              >
                {items}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Divider />

      {/* status selection */}
      <div>
        <FormControl sx={{ m: 1, width: 280 }}>
          <InputLabel id="status-multiple-name-label">Status</InputLabel>
          <Select
            labelId="status-multiple-name-label"
            id="status-multiple-name"
            multiple
            value={statusName}
            onChange={handleChangeStatus}
            input={<OutlinedInput label="statusName" />}
            MenuProps={MenuProps}
          >
            {status.map((items) => (
              <MenuItem
                key={items}
                value={items}
                style={getStyles(items, statusName, theme)}
              >
                {items}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Divider />

      {/* apply btn */}
      <div className="flex justify-center">
        <Button
          onClick={applyHandler(anchor)}
          //for Material UI i wrote inline CSS
          sx={{
            width: 120,
            backgroundColor: "red",
            m: 2,
            color: "white",

            borderRadius: 5,
            borderColor: "#171010",
            borderStyle: "solid",
            borderWidth: 1,
            fontWeight: 600,
          }}
        >
          Apply
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={() => setOpen(!open)}>
            <TuneIcon className="text-white" />
          </Button>
          {/* <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer> */}
          <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={toggleDrawer(anchor)}
            onOpen={toggleDrawer(anchor)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
