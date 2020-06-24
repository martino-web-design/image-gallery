import React, { useState, useEffect } from "react";
import { Grid, AppBar, Toolbar, TextField, InputLabel, Select, MenuItem, Typography, IconButton, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MediaCard from "./MediaCard";

function NewSearch() {
  const [searchData, setSearchData] = useState([]);
  const [title, setTitle] = useState("");
  const [titleBtnClick, setTitleBtnClick] = useState("hawaii");
  const [amount, setAmount] = useState(10);

  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "16142259-7ff05626ba8af26f94db0290b";

  useEffect(() => {
    fetch(`${apiUrl}?key=${apiKey}&q=${titleBtnClick}&image_type=photo&per_page=${amount}&safesearch=true`)
      .then((res) => res.json())
      .then((data) => setSearchData(data.hits));
  }, [titleBtnClick, amount]);

  function setImagesShown(e) {
    setAmount(e.target.value);
  }

  function setSearchTitle(e) {
    setTitle(e.target.value);
  }

  function handleSearchClick() {
    setTitleBtnClick(title);
  }

  function searchKeyPressHandler(e) {
    if (e.keyCode === 13) {
      handleSearchClick();
    }
  }

  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <IconButton onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
          <TextField onChange={setSearchTitle} onKeyUp={searchKeyPressHandler} placeholder="Search..." />

          <Divider style={{ width: "1px", height: "40px", marginLeft: "15px" }} orientation="vertical" />
          <InputLabel style={{ padding: "0 10px" }} id="demo-simple-select-label">
            Images to show:
          </InputLabel>
          <Select color="primary" labelId="demo-simple-select-label" id="demo-simple-select" value={amount} onChange={setImagesShown}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={25}>Twenty-Five</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" style={{ fontFamily: "Kaushan Script, cursive", color: "#fff", margin: "50px auto", textAlign: "center" }}>
        Image Gallery
      </Typography>
      <Typography style={{ color: "white", textTransform: "uppercase", paddingLeft: "5px" }}>Images of: {titleBtnClick}</Typography>

      <Grid container spacing={2} style={{ padding: "5px" }}>
        {searchData.map((img) => (
          <Grid item key={img.id} xs={12} sm={6} lg={4}>
            <MediaCard title={img.tags} name={img.user} avatar={img.largeImageURL} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NewSearch;
