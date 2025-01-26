import { useState, useContext } from "react";
import DetailsContext from "./DetailsContext";
import LoadingContext from "../loading/LoadingContext";

const DetailsState = (props) => {
  const { setLoading } = useContext(LoadingContext);
  const [enteredDetails, setEnteredDetails] = useState({
    name: "",
    age: "",
    sex: "",
  });
  const [extractedValues, setExtractedValues] = useState({
    name: "",
    age: "",
    sex: "",
    sugarValue: "",
  });
  const [report, setReport] = useState(null);


  const onDetailsChange = (e) => {
    setEnteredDetails({ ...enteredDetails, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    setReport(e.target.files[0]);
  };

const toTitleCase = (str) =>
  str.replace(
    /(^\w|\s\w)(\S*)/g,
    (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
  );




  const uploadButtonHandler = async (e) => {
    e.preventDefault();
    // console.log('submitted')

    const data = new FormData();
    data.append("report", report);

    try {
      // sending request to the server
      const response = await fetch("http://localhost:5000/extract", {
        method: "POST",
        body: data,
      });
      // converting response to JSON
      let extractedData = await response.json()
      extractedData = extractedData.data
      const capName = toTitleCase(extractedData.name.toLowerCase());
      // Setting the values to the state
      setExtractedValues({
        name: capName,
        age: extractedData.age,
        sex: extractedData.sex,
        sugarValue: extractedData.sugarValue,
      });
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };

  const sampleUploadHandler = async (pdfFileName) => {
    console.log("Attempting to upload sample:", pdfFileName);
    setLoading(true);
  
    try {
      // Fetch the PDF file from the public/reports folder
      const response = await fetch(`/reports/${pdfFileName}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch the file: ${pdfFileName}`);
      }
      const blob = await response.blob(); // Convert response to Blob
      console.log("Fetched file successfully:", pdfFileName);
  
      // Create a File object from the Blob
      const file = new File([blob], pdfFileName, { type: "application/pdf" });
  
      // Create FormData and append the file
      const data = new FormData();
      data.append("report", file);
  
      // Send the file to the backend
      const uploadResponse = await fetch("http://localhost:5000/extract", {
        method: "POST",
        body: data,
      });
  
      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file to backend");
      }
  
      // Parse and handle the backend response
      const extractedData = await uploadResponse.json();
      const capName = toTitleCase(extractedData.data.name.toLowerCase());
      setExtractedValues({
        name: capName,
        age: extractedData.data.age,
        sex: extractedData.data.sex,
        sugarValue: extractedData.data.sugarValue,
      });
  
      console.log("File uploaded and processed successfully:", pdfFileName);
      setLoading(false);
    } catch (error) {
      console.error("Error during sample upload:", error);
      setLoading(false);
    }
  };
  
  

  const value = {
    enteredDetails,
    setEnteredDetails,
    uploadButtonHandler,
    sampleUploadHandler,
    setReport,
    fileChangeHandler,
    onDetailsChange,
    extractedValues
  };
  return (
    <DetailsContext.Provider value={value}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsState;