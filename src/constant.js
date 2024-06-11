const educationFields = {
  school: { title: "School", type: "text", isRequired: true },
  degree: { title: "Degree", type: "text", isRequired: false },
  field: { title: "Field of study", type: "text", isRequired: false },
  startDate: { title: "Start date", type: "month", isRequired: true },
  endDate: { title: "End date", type: "month", isRequired: true },
  description: { title: "Description", type: "textarea", isRequired: false },
};

const MODAL = {
  ADD: "add",
  EDIT: "edit",
};

export { MODAL, educationFields };
