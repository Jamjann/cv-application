import { useState } from "react";
import "../../styles/sections/general.css";
import ShortDetail from "../../components/ShortDetail";
import Modal from "../../components/Modal";
import Form from "../../components/Form";

function General() {
  const fields = {
    firstName: { title: "First name", type: "text" },
    lastName: { title: "Last name", type: "text" },
    job: { title: "Job", type: "text" },
    location: { title: "Location", type: "text" },
    github: { title: "Github", type: "url" },
    linkedIn: { title: "LinkedIn", type: "url" },
    email: { title: "Email", type: "email" },
    phone: { title: "Phone", type: "tel" },
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

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [modal, setModal] = useState(false);

  function handleSubmitFormBtn({ formData }) {
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
    <header>
      <div className="general-header">
        <div>
          <h1 className="name">
            {generalInfo.firstName + " " + generalInfo.lastName}
          </h1>
          <div className="job">
            <h3>{generalInfo.job}</h3>
            <a href={generalInfo.github} target="_blank">
              {generalInfo.github}
            </a>
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
        <ShortDetail title="LinkedIn" link={generalInfo.linkedIn} />
      </div>
      <Modal isOpen={modal} onClose={handleCloseModalBtn}>
        <Form
          id="gi-form"
          fields={fields}
          data={generalInfo}
          onSubmit={(formData) => handleSubmitFormBtn({ formData })}
          onCancel={handleCancelFormBtn}
        ></Form>
      </Modal>
    </header>
  );
}

export default General;
