import React, {useContext} from 'react'
import DetailsContext from '../contexts/details/DetailsContext';
import LoadingContext from '../contexts/loading/LoadingContext';
import "../stylesheets/modal.css";
import Loading from './Loading';
import { useNavigate } from "react-router-dom";


const ModalReport = () => {
    let navigate = useNavigate();

  const { onDetailsChange, extractedValues
  } = useContext(DetailsContext)
  const {loading
  } = useContext(LoadingContext)
  // const [loading, setLoading] = useState(true)
  const omConfirmation = () => {
      navigate("/visualise");
    };
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                We got these out of your report
              </h5>
              <button
                type="button"
                className="modal-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            {loading ? (
              <Loading loadingText="Extracting text from your report" />
            ) : (
              <div className="modal-body">
                <div className="form-box">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control modal-fields"
                        id="name"
                        aria-describedby="name"
                        name="name"
                        value={extractedValues.name}
                        onChange={onDetailsChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control modal-fields"
                        id="age"
                        name="age"
                        value={parseInt(extractedValues.age)}
                        onChange={onDetailsChange}
                      />
                    </div>
                    <label htmlFor="sex" className="form-label">
                      Sex
                      </label>
                    <div className="input-group mb-3 mt-1">
                      <select
                        className="form-select modal-fields"
                        id="sex"
                        name="sex"
                        onChange={onDetailsChange}
                      >
                          <option value="1">{extractedValues.sex}</option>
                        <option value="2">{extractedValues.sex==='Male'?"Female":"Male"}</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {loading ? (
              ""
            ) : (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-modal-edit"
                  data-bs-dismiss="modal"
                >
                  Edit away!
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-modal-good"
                  onClick={omConfirmation}
                  data-bs-dismiss="modal"
                >
                  Looks good!
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalReport

