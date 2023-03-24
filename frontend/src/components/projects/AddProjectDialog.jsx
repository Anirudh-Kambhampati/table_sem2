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

const initialProject = {
  project: "",
  description: "",
  type: "",
  imgscan: 0,
  imgana: 0,
  ins: 0,
  units: 0,
};

const AddProjectDialog = (props) => {
  const id = `${Date.now()}`.slice(-5);
  const [project, setProject] = useState(initialProject);
  const { addProjectHandler } = props;
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
    addProjectHandler(project);
    setProject(initialProject);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange = (name) => ({ target: { value } }) => {
    setProject({ ...project, [name]: value });
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

          {(project.project = id)}
          <TextField
            margin="dense"
            label="Project"
            type="text"
            fullWidth
            value={project.project}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={project.description}
            onChange={handleChange("description")}
          />
          <TextField
            margin="dense"
            label="Type"
            type="text"
            fullWidth
            value={project.type}
            onChange={handleChange("type")}
          />
          <TextField
            margin="dense"
            label="Images Scanned"
            type="number"
            fullWidth
            value={project.imgscan}
            onChange={handleChange("imgscan")}
          />
          <TextField
            margin="dense"
            label="Images Analysed"
            type="number"
            fullWidth
            value={project.imgana}
            onChange={handleChange("imgana")}
          />
          <TextField
            margin="dense"
            label="Instruments"
            type="number"
            fullWidth
            value={project.ins}
            onChange={handleChange("ins")}
          />
          <TextField
            margin="dense"
            label="Storage Units"
            type="number"
            fullWidth
            value={project.units}
            onChange={handleChange("units")}
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

AddProjectDialog.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
};

export default AddProjectDialog;
