export const BASIC_URL = "http://localhost:3000"; // Backend port URL

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Signup User
    LOGIN: "/api/auth/login", // Login User
    GET_PROFILE: "/api/auth/user/profile", // Get logged in user details
  },
  RESUME: {
    CREATE: "/api/resume/create", // Create new resume
    GET_ALL_RESUMES: "/api/resume/get", // Get all resumes
    GET_RESUME_BY_ID: (id) => `/api/resume/get/${id}`, // Get a specific resume
    UPDATE_RESUME: (id) => `/api/resume/update/${id}`, // Update a specific resume
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload/images`, // Upload thumbnail and Resume profile image
    DELETE_RESUME: (id) => `/api/resume/delete/${id}`, // Delete a specific resume
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload/profile/image", // Upload user profile image
  },
};
