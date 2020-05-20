import React, { useState, useEffect } from "react";
import { Grid, AppBar, Toolbar, TextField, InputLabel, Select, MenuItem, Typography, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MediaCard from "./MediaCard";

function NewSearch() {
  const [searchData, setSearchData] = useState([]);
  const [title, setTitle] = useState("hawaii");
  const [titleBtnClick, setTitleBtnClick] = useState("hawaii");
  const [amount, setAmount] = useState(10);

  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "16142259-7ff05626ba8af26f94db0290b";

  function handleClick() {
    setTitleBtnClick(title);
  }

  useEffect(() => {
    fetch(`${apiUrl}?key=${apiKey}&q=${titleBtnClick}&image_type=photo&per_page=${amount}&safesearch=true`)
      .then((res) => res.json())
      .then((data) => setSearchData(data.hits));
  }, [titleBtnClick, amount]);

  function handleChangeAmount(e) {
    setAmount(e.target.value);
  }

  return (
    <div>
      <AppBar color="default">
        <Toolbar>
          <IconButton onClick={handleClick}>
            <SearchIcon />
          </IconButton>
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Search..." />

          <InputLabel style={{ padding: "0 10px" }} id="demo-simple-select-label">
            Images to show:
          </InputLabel>
          <Select color="primary" labelId="demo-simple-select-label" id="demo-simple-select" value={amount} onChange={handleChangeAmount}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" style={{ color: "#fff", margin: "50px auto", textAlign: "center" }}>
        Image Gallery
      </Typography>

      <Grid container spacing={5} style={{ padding: "24px" }}>
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
