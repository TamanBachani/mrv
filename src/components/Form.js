import React, {  useContext } from "react";
import DetailsContext from "../contexts/details/DetailsContext";
import "../stylesheets/form.css";

const Form = () => {
  const {
    uploadButtonHandler,
    fileChangeHandler,
    onDetailsChange,
  } = useContext(DetailsContext);


  return (
    <div>
      <div className="form-bg">
        <div className="form-box">
          <form onSubmit={uploadButtonHandler}>
            <div className="mb-3">
              <label htmlFor="report" className="form-label">
                Medical (or Lab) Report
              </label>
              <input
                className="form-control"
                type="file"
                name="report"
                id="report"
                onChange={fileChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="name"
                onChange={onDetailsChange}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                onChange={onDetailsChange}
                name="age"
              />
            </div>
            <label htmlFor="sex" className="form-label">
              Sex
            </label>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="sex">
                Sex
              </label>
              <select
                className="form-select"
                id="sex"
                onChange={onDetailsChange}
                name="sex"
              >
                <option defaultValue>Choose Sex</option>
                <option value="1">Female</option>
                <option value="2">Male</option>
                <option value="3">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="samples-btn m-15"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
