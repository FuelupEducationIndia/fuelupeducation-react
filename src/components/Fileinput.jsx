import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const Fileinput = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <div className="file-input">
      <div {...getRootProps()}>
        <input {...getInputProps()} />

        <p>
          <FileCopyIcon /> Drop files here or Click to <span>Browse</span>
        </p>
      </div>
      <div>{images}</div>
    </div>
  );
};

export default Fileinput;
