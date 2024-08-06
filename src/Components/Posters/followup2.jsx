import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const Followup2 = () => {
  const [Teachersname, setTeachersName] = useState("with Rohit");
  const [date, setDate] = useState("29 - 30 MAY 2024");
  const [time, setTime] = useState("7AM - 10AM");
  const [mode, setMode] = useState("Follow up in Hindi");

  const [imagePreview, setImagePreview] = useState("./sample.jpg");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPoster3 = async () => {
    const poster = document.getElementById("posterf2");
    if (poster) {
      try {
        const canvas = await html2canvas(poster);
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/jpg");
        link.download = "design.jpg";
        link.click();
      } catch (error) {
        console.error("Error generating canvas: ", error);
      }
    } else {
      console.error("Poster element not found");
    }
  };
  const styles = {
    container: { display: "flex", flexDirection: "column" },
    imagePreviewContainer: {
      width: "270px",
      height: "270px",
      borderRadius: "50%",
      overflow: "hidden",
      marginTop: "480px",
      marginLeft: "37.1%",
      border: "2px solid white",
      position: "relative",
    },
    imagePreview: { width: "100%", height: "100%", objectFit: "cover" },
  };

  return (
    <div className="container">
      <div
        id="posterf2"
        className="firstdiv"
        style={{
          width: "1080px",
          height: "1080px",
          border: "1px solid #000",
          padding: "20px",
        }}
      >
        <h5 id="teachersnamef2">
          {Teachersname}
          <br />
        </h5>
        <h5 id="timef2">{time}</h5>
        <h5 id="datef2">{date}</h5>
        <h5 id="modef2">{mode}</h5>
        <div style={styles.container}>
          {imagePreview && (
            <div style={styles.imagePreviewContainer}>
              <img
                src={imagePreview}
                alt="Preview"
                style={styles.imagePreview}
              />
            </div>
          )}
        </div>
      </div>

      <div className="form-container">
        <h1>Enter Your Details Here</h1>
        <form>
          <label>
            Enter Teachers Name:
            <input
              type="text"
              value={Teachersname}
              onChange={(e) => setTeachersName(e.target.value)}
            />
          </label>
          <label>
            Mode
            <input
              type="text"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Time:
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>

          <label>
            Select Teachers Photo
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <label>
            <i>Select passport size photo for better result</i>
          </label>
        </form>
        <button id="button" onClick={downloadPoster3}>
          Download Poster
        </button>
      </div>
    </div>
  );
};

export default Followup2;
