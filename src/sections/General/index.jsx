import { useState } from "react";
import "../../styles/sections/general.css";
import ShortDetail from "../../components/ShortDetail";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

const fields = {
  firstName: { title: "First name", type: "text", isRequired: true },
  lastName: { title: "Last name", type: "text", isRequired: true },
  job: { title: "Job", type: "text", isRequired: true },
  location: { title: "Location", type: "text", isRequired: true },
  github: { title: "Github", type: "url", isRequired: false },
  linkedIn: { title: "LinkedIn", type: "url", isRequired: false },
  email: { title: "Email", type: "email", isRequired: true },
  phone: { title: "Phone", type: "tel", isRequired: true },
};

const initialGeneralInfo = {
  firstName: "Phatthawipha",
  lastName: "Jeamburanakul",
  job: "Software Engineer",
  location: "Vancouver,CA",
  github: "https://github.com/Jamjann",
  linkedIn: "https://www.linkedin.com/in/jamjann",
  email: "phatthawipha.j@gmail.com",
  phone: "+1 (236) 869 3963",
};

function General() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [modal, setModal] = useState(false);

  function handleSubmitFormBtn({ formData }) {
    console.log("formData", formData);
    setGeneralInfo(formData);

    setModal(false);
  }

  function handleCancelFormBtn() {
    setModal(false);
  }

  function handleCloseModalBtn() {
    setModal(false);
  }

  return (
    <div className="general-section">
      <>
        <div className="section-header">
          <div>
            <h1>{generalInfo.firstName + " " + generalInfo.lastName}</h1>
            <div className="job">
              <h3>{generalInfo.job}</h3>
              {generalInfo.github && (
                <a href={generalInfo.github} target="_blank">
                  {generalInfo.github}
                </a>
              )}
            </div>
          </div>
          <button type="button" onClick={() => setModal(true)}>
            Edit
          </button>
        </div>
        <div className="general-detail">
          <ShortDetail title="Location" val={generalInfo.location} />
          <ShortDetail title="Phone" val={generalInfo.phone} />
          <ShortDetail title="Email" val={generalInfo.email} />
          {generalInfo.linkedIn && (
            <ShortDetail title="LinkedIn" link={generalInfo.linkedIn} />
          )}
        </div>
      </>

      <Modal isOpen={modal} onClose={handleCloseModalBtn}>
        <Form
          id="gi-form"
          fields={fields}
          data={generalInfo}
          onSubmit={(formData) => handleSubmitFormBtn({ formData })}
          onCancel={handleCancelFormBtn}
        ></Form>
      </Modal>
    </div>
  );
}

export default General;
