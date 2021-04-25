import React from "react";
import Filebase from "react-file-base64";
import { Button } from "@material-ui/core";
import "./upload.css";
function Upload() {
  return (
    <form>
      <div className="upload">
        <div className="fileInput">
          <Filebase type="file" multiple={false} />
        </div>
        <div className="upload-btn">
          <Button
            style={{backgroundColor: "#61dafb", color: "#ffff"}}
            variant="contained"
            
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
