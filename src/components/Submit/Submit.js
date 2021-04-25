import React from 'react'


function Submit(props) {
  const hiddenFileInput = React.useRef(null)
  const handleClick = event=>{
    hiddenFileInput.current.click()
  }
  const handleChange = event=>{
const fileUploaded = event.target.files[0]
props.handleFile(fileUploaded)
  }
  return (
    <div>
      <button onClick={handleClick}>
        Upload file
      </button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display:'none'}}/>
    </div>
  )
}

export default Submit
