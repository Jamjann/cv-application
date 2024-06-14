import { useState } from "react";
import "../../styles/sections/global.css";
import "../../styles/sections/experience.css";

import Modal from "../../components/Modal";
import Form from "../../components/Form";
import { MODAL, experienceFields as fields } from "../../constant";
import ExperienceList from "./list";
import ConfirmDialog from "../../components/ConfirmDialog";

const initialExperienceInfo = [
  {
    id: crypto.randomUUID(),
    company: "PTT Group",
    position: "Internship Trainee",
    startDate: "2014-04",
    endDate: "2014-05",
    responsibilities:
      "• Website creation and development\n• Manage a database to store company information\n• Network configuration and troubleshooting\n• Contact other departments to coordinate with the IT network",
    skills: ["sql", "css", "html"],
    isActive: true,
  },
];
const newExperienceItem = {
  id: null,
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  responsibilities: "",
  skills: [],
  isActive: true,
};

function Experience() {
  const [experienceInfo, setExperienceInfo] = useState(initialExperienceInfo);
  const [modalId, setModalId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  function handleSubmitAddForm({ formData }) {
    console.log("formdata", formData);
    setExperienceInfo([...experienceInfo, formData]);
    setModalId(null);
  }

  function handleSubmitEditForm({ id, formData }) {
    const newList = experienceInfo.map((item) => {
      if (item.id === id) {
        console.log("id!", id);
        return formData;
      } else {
        return item;
      }
    });

    setExperienceInfo(newList);
    setModalId(null);
  }

  function handleSubmitDeleteForm({ id }) {
    const updatedList = experienceInfo.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: false };
      } else {
        return item;
      }
    });

    setExperienceInfo(updatedList);
    setModalId(null);
  }

  function handleEditItem(id) {
    setModalId(MODAL.EDIT);
    setActiveItem(id);
  }

  function handleDeleteItem(id) {
    setModalId(MODAL.DELETE);
    setActiveItem(id);
  }

  function handleCloseModal() {
    setModalId(null);
  }

  return (
    <div className="experience-section section">
      <>
        <div className="section-header">
          <h2 className="topic">Experience</h2>
          <button type="button" onClick={() => setModalId(MODAL.ADD)}>
            Add
          </button>
        </div>
        <div className="section-detail">
          <ExperienceList
            list={experienceInfo.filter((i) => i.isActive)}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        </div>
      </>

      <Modal
        isOpen={modalId === MODAL.ADD}
        onClose={handleCloseModal}
        title="Add experience"
      >
        <Form
          id="add-edu-form"
          fields={fields}
          data={newExperienceItem}
          onSubmit={(formData) => handleSubmitAddForm({ formData })}
          onCancel={handleCloseModal}
        />
      </Modal>

      <Modal
        isOpen={modalId === MODAL.EDIT}
        onClose={handleCloseModal}
        title="Edit experience"
      >
        <Form
          id="edit-edu-form"
          fields={fields}
          data={experienceInfo.find((i) => i.id === activeItem)}
          onSubmit={(formData) =>
            handleSubmitEditForm({ id: activeItem, formData })
          }
          onCancel={handleCloseModal}
        />
      </Modal>

      <Modal
        isOpen={modalId === MODAL.DELETE}
        onClose={handleCloseModal}
        title="Delete experience"
      >
        <ConfirmDialog
          msg={
            'Are you sure you want to delete your "' +
            experienceInfo.find((i) => i.id === activeItem)?.company +
            '" experience?'
          }
          onSubmit={() => handleSubmitDeleteForm({ id: activeItem })}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export default Experience;
