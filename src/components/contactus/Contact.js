import react  from "react"
import { Button } from "@material-ui/core";
import "./contact.css";

function Contact(){
return(
<form method="POST" action="/contact-us.php">
            <label>
              First Name
              <input type="text" name="f_name" />
            </label><br/><br/>
            <label>
              Last Name
              <input type="text" name="l_name" />
            </label><br/><br/>

            <label>
              Email
              <input type="email" name="email" />
            </label><br/><br/>

            <label>
             Phone
              <input type="text" name="phone" />
            </label><br/><br/>

            <label>
             Message
              <textarea type="text" name="message">  </textarea> 
            </label><br/><br/>
            <Button
            style={{backgroundColor: "#61dafb", color: "#ffff"}}
            variant="contained"
            type="submit" name="submit">
            Submit
          </Button>
          </form>
)}

export default Contact