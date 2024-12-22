export const postRequestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getRequestOptions = {
    method: 'GET'
};

export const PROJECTS_VAR = "Projects"
export const EDUCATION_VAR = "Education"
export const BASICINFO_VAR = "Basicinfo"
export const WORKEXPINFO_VAR = "workExp"

// /-------------APIS----------------------------

export const MODULESAPI = 'api/getsavemodules'
export const SAVEINFOAPI = 'api/saveinfo'
export const SAVE_WORKEXP_API = 'api/saveWorkExp'
export const SAVE_EDUCATION_API = 'api/save-education'
export const SAVE_PROJECTS_API = 'api/saveProjects'



export const tabContent = {
  Basicinfo: {
    title: "Basic Info",
    description:
      "Basic information about the individual, including contact details, a brief summary, and professional background.",
  },
  WorkExp: {
    title: "Work Experience",
    description:
      "A comprehensive overview of previous job roles, responsibilities, and accomplishments in the workplace.",
  },
  Education: {
    title: "Education",
    description:
      "Details of educational qualifications, including institutions attended, degrees obtained, and relevant courses.",
  },
  Projects: {
    title: "Projects",
    description:
      "Highlights of significant projects undertaken, showcasing skills applied and outcomes achieved.",
  },
  Skills: {
    title: "Skills",
    description:
      "A list of key skills and competencies relevant to the individual’s career, including both technical and soft skills.",
  },
};

