import React from "react";
import { Button } from "@material-ui/core";
import "./upload.css";
function Upload() {
  const handleClick =()=>{
    window.open('mailto:info@KoxStaffing.com?subject=Subject&body=Body%20goes%20here')
  }
  return (
    <form>
      <div className="upload">
       
        <div className="upload-btn">
          <Button
            style={{backgroundColor: "#61dafb", color: "#ffff"}}
            variant="contained"
            onClick={handleClick}
            type="submit"
          >
            Submit your resume
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Upload;
