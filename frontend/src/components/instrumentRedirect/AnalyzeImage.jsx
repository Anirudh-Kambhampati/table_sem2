import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import {
  FormControl,
  Select,
  Checkbox,
  ListItemText,
  InputLabel,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import { Button } from "@mui/material";
import SatelliteIcon from "@mui/icons-material/Satellite";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../images/MicrosoftTeams-image (2).png";
import Recommendations from "./Chatbotnew";

const AnalyzeImage = () => {
  const [images, setImages] = useState([]);
  const [scanned, setScanned] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  const [showChatbot, setShowChatbot] = useState(0);
  useEffect(() => {
    setScanned([]);
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const scanImg = () => {
    setImageURLs([]);
    toast.warn("Your image is being scanned!", { autoClose: 2000 });
    setTimeout(() => {
      setScanned([img]);
    }, 4000);
  };

  const showToastMessage = () => {
    setImageURLs([]);
    setImages([]);
    toast.warn("Please Wait While the Image is being sent", {
      autoClose: 1500,
    });
    toast.success("Analysis Sent !", {
      position: toast.POSITION.TOP_CENTER,
      delay: 2500,
    });
    setTimeout(() => {
      setShowChatbot(1);
    }, 5000);
  };

  const insData = JSON.parse(localStorage.getItem("tableDataIns"));
  const storData = JSON.parse(localStorage.getItem("tableDataStorage"));
  const units = insData.map((item) => item.unit);
  const containers = storData.map((item) => item.name);
  const [stat, setStat] = useState([]);
  const [cont, setCont] = useState([]);
  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event;
    setStat(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeStorage = (event) => {
    const {
      target: { value },
    } = event;
    setCont(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="d-block" style={{ margin: "80px" }}>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        IMAGE ANALYSIS
      </h3>

      {scanned[0] && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // marginLeft: "400px",
              // marginTop: "-425px",
              // position: "absolute",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={img} alt="image" />
            </CardActionArea>
          </Card>
        </div>
      )}

      {imageURLS[0] &&
        imageURLS.map((imageSrc) => (
          <Card>
            <CardActionArea
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={imageSrc}
                alt="image"
                style={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h5>{images[0].name}</h5>
              </Typography>
            </CardContent>
          </Card>
        ))}
      <Card style={{ paddingBottom: "40px", marginTop: "100px" }}>
        <CardContent
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography>
            <FormControl>
              {" "}
              <InputLabel id="checkbox-label" style={{ height: "30px" }}>
                Select Instrument
              </InputLabel>
              <Select
                labelId="checkbox-label"
                id="checkbox"
                value={stat}
                onChange={handleChangeRole}
                input={<OutlinedInput label="Select Instrument" />}
                renderValue={(selected) => selected}
                style={{ width: "150px", height: "60px" }}
              >
                {units.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={stat.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
          <Typography>
            <FormControl>
              {" "}
              <InputLabel id="checkbox-label-2" style={{ height: "30px" }}>
                Select Storage
              </InputLabel>
              <Select
                labelId="checkbox-label-2"
                id="checkbox"
                value={cont}
                onChange={handleChangeStorage}
                input={<OutlinedInput label="Select Storage" />}
                renderValue={(selected) => selected}
                style={{ width: "150px", height: "60px" }}
              >
                {containers.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={stat.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
          <Typography>
            <Button
              onClick={scanImg}
              variant="contained"
              style={{ height: "60px" }}
            >
              Scan Image <SatelliteIcon />
            </Button>
          </Typography>
          <Typography>
            <Button
              onClick={showToastMessage}
              variant="contained"
              style={{ height: "60px" }}
            >
              Send Analysis <SendIcon />
            </Button>
            <ToastContainer />
            {showChatbot ? <Recommendations /> : <></>}
          </Typography>
        </CardContent>
      </Card>

      <input type="file" accept="image/*" onChange={onImageChange} />
      {console.log(
        <input type="file" accept="image/*" onChange={onImageChange} />
      )}
    </div>
  );
};

export default AnalyzeImage;
