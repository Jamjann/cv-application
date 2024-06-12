const educationFields = {
  school: { title: "School", type: "text", isRequired: true },
  degree: { title: "Degree", type: "text", isRequired: false },
  field: { title: "Field of study", type: "text", isRequired: false },
  startDate: { title: "Start date", type: "month", isRequired: true },
  endDate: { title: "End date", type: "month", isRequired: true },
  description: { title: "Description", type: "textarea", isRequired: false },
};

const generalFields = {
  firstName: { title: "First name", type: "text", isRequired: true },
  lastName: { title: "Last name", type: "text", isRequired: true },
  job: { title: "Job", type: "text", isRequired: true },
  location: { title: "Location", type: "text", isRequired: true },
  github: { title: "Github", type: "url", isRequired: false },
  linkedIn: { title: "LinkedIn", type: "url", isRequired: false },
  email: { title: "Email", type: "email", isRequired: true },
  phone: { title: "Phone", type: "tel", isRequired: true },
};

const MODAL = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
};

export { MODAL, educationFields, generalFields };
