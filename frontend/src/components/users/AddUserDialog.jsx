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
const initialUser = {
  userId: "",
  name: "",
  email: "",
  role: "",
  assignedProjects: 0,
};

const AddUserDialog = (props) => {
  const id = `${Date.now()}`.slice(-5);
  const [user, setUser] = useState(initialUser);
  const { addUserHandler } = props;
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
    event.preventDefault();
    addUserHandler(user);
    setUser(initialUser);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setUser({ ...user, [name]: value });
    };

  const [personName, setPersonName] = useState([]);
  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const role_names = [
    "Administrator",
    "Researcher",
    "Collaborator",
    "Data Consumer",
  ];

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
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Item to the User List</DialogContentText>

          {(user.userId = id)}
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={user.userId}
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={user.name}
            onChange={handleChange("name")}
          />
          <TextField
            margin="dense"
            label="e-Mail"
            type="email"
            fullWidth
            value={user.email}
            onChange={handleChange("email")}
          />
          <FormControl sx={{ m: 2, width: 300 }}>
            <InputLabel id="checkbox-label">Role</InputLabel>
            <Select
              labelId="checkbox-label"
              id="checkbox"
              value={personName}
              onChange={handleChangeRole}
              input={<OutlinedInput label="Role" />}
              renderValue={(selected) => selected}
            >
              {role_names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            {(user.role = personName)}
          </FormControl>

          <TextField
            margin="dense"
            label="Assigned Projects"
            type="number"
            fullWidth
            value={user.assignedProjects}
            onChange={handleChange("assignedProjects")}
          />
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

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default AddUserDialog;
