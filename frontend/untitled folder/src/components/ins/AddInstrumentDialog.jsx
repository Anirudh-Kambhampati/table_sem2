import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import {
  FormControl,
  Select,
  Checkbox,
  ListItemText,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
const initialInstrument = {
  unit: "",
  description: "",
  ipAddress: "",
  gateway: "",
  status: "",
};

const AddInstrumentDialog = (props) => {
  const [instrument, setInstrument] = useState(initialInstrument);
  const { addInstrumentHandler } = props;
  const [open, setOpen] = React.useState(false);

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  });

  const handleSwitchChange = (name) => (event) => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
  };

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSwitch();
  };

  const handleAdd = (event) => {
    addInstrumentHandler(instrument);
    setInstrument(initialInstrument);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange = (name) => ({ target: { value } }) => {
    setInstrument({ ...instrument, [name]: value });
  };

  const [stat, setStat] = useState([]);
  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setStat(typeof value === "string" ? value.split(",") : value);
  };
  const instrument_status = ["Active", "Available", "Offline"];

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Instrument</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Item to the Instrument List</DialogContentText>

          <TextField
            margin="dense"
            label="Unit"
            type="text"
            fullWidth
            value={instrument.unit}
            onChange={handleChange("unit")}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={instrument.description}
            onChange={handleChange("description")}
          />
          <TextField
            margin="dense"
            label="IP Address"
            type="text"
            fullWidth
            value={instrument.ipAddress}
            onChange={handleChange("ipAddress")}
          />
          <TextField
            margin="dense"
            label="Gateway"
            type="text"
            fullWidth
            value={instrument.gateway}
            onChange={handleChange("gateway")}
          />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="checkbox-label">Role</InputLabel>
            <Select
              labelId="checkbox-label"
              id="checkbox"
              value={stat}
              onChange={handleChangeRole}
              input={<OutlinedInput label="Role" />}
              renderValue={(selected) => selected}
            >
              {instrument_status.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={stat.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            {(instrument.status = stat)}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange("addMultiple")}
              value="addMultiple"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddInstrumentDialog.propTypes = {
  addInstrumentHandler: PropTypes.func.isRequired,
};

export default AddInstrumentDialog;
