import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input.component";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector.component";
import { UserContext } from "../../context/userContext";
import { API_PATHS } from "../../utils/apiPath.util";
import axiosInstance from "../../utils/axiosInstance.util";
import { validateEmail, validatePassword } from "../../utils/helper.util";
import uploadImage from "../../utils/uploadImage.util";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Oops! We need your name to get started.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Hmm... that doesn’t look like a valid email. Try again?");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Your password needs a bit more power: use 8+ characters, including uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    setError("");

    try {
      if (profilePic) {
        const imageUploadResponse = await uploadImage(profilePic);
        profileImageUrl = imageUploadResponse.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (e) {
      setError(
        "Something went wrong. Please double-check your info and try again."
      );
    }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-black">
        Let's Create Something Amazing!
      </h3>
      <p className="text-sm text-slate-700 mt-[5px] mb-6">
        Fill in your details and get ready to build a resume that stands out.
      </p>

      <form onSubmit={handleSignup}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="e.g. Alex Morgan"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="e.g. alex@domain.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Create a Strong Password"
            placeholder="Use a strong one"
            type="password"
          />
        </div>
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button
          type="submit"
          className="btn-primary bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
        >
          Create My Account
        </button>

        <p className="text-sm text-slate-800 mt-3">
          Already have an account?{" "}
          <button
            className="font-medium text-primary underline cursor-pointer"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
