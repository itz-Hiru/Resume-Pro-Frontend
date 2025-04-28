import { API_PATHS } from "./apiPath.util";
import axiosInstance from "./axiosInstance.util";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile); // Append image to form data

    try {
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set header fot file upload
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error while uploading image: ", error);
        throw error; // Rethrow error for error handling
    }
};

export default uploadImage;
