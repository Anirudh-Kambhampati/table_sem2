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

const initialStorage = {
  uId: "",
  name: "",
  capacity: "",
  type: "",
  status: "",
};

const AddStorageDialog = (props) => {
  const [storage, setStorage] = useState(initialStorage);
  const { addStorageHandler } = props;
  const [open, setOpen] = React.useState(false);
  const storage_status = ["OnLine", "Offline"];

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
    addStorageHandler(storage);
    setStorage(initialStorage);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setStorage({ ...storage, [name]: value });
    };

  const [stat, setStat] = useState([]);
  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setStat(typeof value === "string" ? value.split(",") : value);
  };

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
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Item to the Project List</DialogContentText>

          <TextField
            margin="dense"
            label="Unit ID"
            type="text"
            fullWidth
            value={storage.uId}
            onChange={handleChange("uId")}
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={storage.name}
            onChange={handleChange("name")}
          />
          <TextField
            margin="dense"
            label="Capacity"
            type="text"
            fullWidth
            value={storage.capacity}
            onChange={handleChange("capacity")}
          />
          <TextField
            margin="dense"
            label="Type"
            type="text"
            fullWidth
            value={storage.type}
            onChange={handleChange("type")}
          />

          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="checkbox-label">Status</InputLabel>
            <Select
              labelId="checkbox-label"
              id="checkbox"
              value={stat}
              onChange={handleChangeRole}
              input={<OutlinedInput label="Status" />}
              renderValue={(selected) => selected}
            >
              {storage_status.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={stat.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            {(storage.status = stat)}
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

AddStorageDialog.propTypes = {
  addStorageHandler: PropTypes.func.isRequired,
};

export default AddStorageDialog;
