import React, { useState } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import Filebase from "react-file-base64";
import {useHistory} from 'react-router-dom'
import { createPost } from "../../actions/Posts";

const initState = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  city: "",
  message: "",
  selectedFile: "",
};

function ContactUs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory()
  let [postData, setPostData] = useState(initState);
  const [errors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData)
    dispatch(createPost(postData,history));
    clear()
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setPostData({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      city: "",
      message: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {errors.firstname}
        <TextField
          name="firstname"
          label="First Name"
          type='text'
          variant="outlined"
          fullWidth
          required={true}
          value={postData.firstname}
           onChange={(e) => handleChange(e)}
        />

        <TextField
          name="lastname"
          label="Last Name"
          variant="outlined"
          fullWidth
          required
          value={postData.lastname}
          onChange={(e) => handleChange(e)}
        />

        <TextField
          name="email"
          label="Email"
          variant="outlined"
          required
          value={postData.email}
          fullWidth
          onChange={(e) => handleChange(e)}
        />

        <TextField
          name="phonenumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          required
          value={postData.phonenumber}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="city"
          label="Current city/state"
          variant="outlined"
          fullWidth
          required
          value={postData.city}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          multiline
          required
          fullWidth
          value={postData.message}
          onChange={(e) => handleChange(e)}
        />
        <div className={classes.fileInput}>
          <Filebase
            type="file"
            multiple={false}
            required
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          color="primary"
          variant="contained"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default ContactUs;
