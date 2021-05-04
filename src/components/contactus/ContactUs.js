import React, { useState, useRef } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import Filebase from "react-file-base64";
import { useHistory } from "react-router-dom";
import { createPost } from "../../actions/Posts";
import Validator from "simple-react-validator";

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
  const validator = useRef(new Validator());
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let [postData, setPostData] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setErrors(validateEmail());
console.log(postData)
      dispatch(createPost(postData, history));
    } else {
      validator.current.showMessages();
    }

    clear();
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
  const [error, setErrors] = useState({
    input:""
  });
  const validateEmail = () => {
    let input = postData.email;
    let error = {};
    let isValid = true;

    if (typeof input !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(input)) {
        isValid = false;

        error.input = "Please enter valid email address.";
      }
    }

    return isValid;
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {validator.current.message("firstname", postData.firstname, "required")}
        <TextField
          name="firstname"
          label="First Name"
          type="text"
          variant="outlined"
          fullWidth
          required={true}
          value={postData.firstname}
          onChange={(e) => handleChange(e)}
        />
        {validator.current.message("lastname", postData.lastname, "required")}
        <TextField
          name="lastname"
          label="Last Name"
          variant="outlined"
          fullWidth
          required
          value={postData.lastname}
          onChange={(e) => handleChange(e)}
        />
        {validator.current.message("email", postData.email, "required") }
        {error.input}
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          required
          value={postData.email}
          fullWidth
          onChange={(e) => handleChange(e)}
        />
        {validator.current.message(
          "phonenumber",
          postData.phonenumber,
          "required"
        )}
        <TextField
          name="phonenumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          required
          value={postData.phonenumber}
          onChange={(e) => handleChange(e)}
        />
        {validator.current.message("city", postData.city, "required")}
        <TextField
          name="city"
          label="Current city/state"
          variant="outlined"
          fullWidth
          required
          value={postData.city}
          onChange={(e) => handleChange(e)}
        />
        {validator.current.message("message", postData.message, "required")}
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
