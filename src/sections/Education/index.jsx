import { useState } from "react";
import "../../styles/sections/global.css";
import "../../styles/sections/education.css";

import Modal from "../../components/Modal";
import Form from "../../components/Form";
import { MODAL, educationFields as fields } from "../../constant";
import EducationList from "./list";
import ConfirmDialog from "../../components/ConfirmDialog";

const initialEducationInfo = [
  {
    id: crypto.randomUUID(),
    school: "Kasetsart University",
    degree: "Bachelor of Engineering - BE",
    field: "Computer Engineering",
    startDate: "2011-05",
    endDate: "2015-05",
    description:
      '• Part-time tutor for high school students\n• Computer & Programming teaching assistant\n• Participate with subsidiary of PTT related to technical for the way to improve the corporation\n• Representative of GPSC to participate project, initiated by Microsoft\n• Participate with LINE corporation in the topic of "Settle online business against application Line shop"\n• Participate in activity of "Teaching junior to be programmer"',
    isActive: true,
  },
  {
    id: crypto.randomUUID(),
    school: "test",
    degree: "",
    field: "",
    startDate: "2024-04",
    endDate: "2024-12",
    description:
      '• Part-time tutor for high school students\n• Computer & Programming teaching assistant\n• Participate with subsidiary of PTT related to technical for the way to improve the corporation\n• Representative of GPSC to participate project, initiated by Microsoft\n• Participate with LINE corporation in the topic of "Settle online business against application Line shop"\n• Participate in activity of "Teaching junior to be programmer"',
    isActive: true,
  },
];
const newEducationItem = {
  id: null,
  school: "",
  degree: "",
  field: "",
  startDate: "",
  endDate: "",
  description: "",
  isActive: true,
};

function Education() {
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [modalId, setModalId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  function handleSubmitAddForm({ formData }) {
    setEducationInfo([...educationInfo, formData]);
    setModalId(null);
  }

  function handleSubmitEditForm({ id, formData }) {
    const newList = educationInfo.map((item) => {
      if (item.id === id) {
        return formData;
      } else {
        return item;
      }
    });

    setEducationInfo(newList);
    setModalId(null);
  }

  function handleSubmitDeleteForm({ id }) {
    const updatedList = educationInfo.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: false };
      } else {
        return item;
      }
    });

    setEducationInfo(updatedList);
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
    <div className="education-section section">
      <>
        <div className="section-header">
          <h2 className="topic">Education</h2>
          <button type="button" onClick={() => setModalId(MODAL.ADD)}>
            Add
          </button>
        </div>
        <div className="section-detail">
          <EducationList
            list={educationInfo.filter((i) => i.isActive)}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        </div>
      </>

      <Modal
        isOpen={modalId === MODAL.ADD}
        onClose={handleCloseModal}
        title="Add education"
      >
        <Form
          id="add-edu-form"
          fields={fields}
          data={newEducationItem}
          onSubmit={(formData) => handleSubmitAddForm({ formData })}
          onCancel={handleCloseModal}
        />
      </Modal>

      <Modal
        isOpen={modalId === MODAL.EDIT}
        onClose={handleCloseModal}
        title="Edit education"
      >
        <Form
          id="edit-edu-form"
          fields={fields}
          data={educationInfo.find((i) => i.id === activeItem)}
          onSubmit={(formData) =>
            handleSubmitEditForm({ id: activeItem, formData })
          }
          onCancel={handleCloseModal}
        />
      </Modal>

      <Modal
        isOpen={modalId === MODAL.DELETE}
        onClose={handleCloseModal}
        title="Delete education"
      >
        <ConfirmDialog
          msg={
            'Are you sure you want to delete your "' +
            educationInfo.find((i) => i.id === activeItem)?.school +
            '" education?'
          }
          onSubmit={() => handleSubmitDeleteForm({ id: activeItem })}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export default Education;
