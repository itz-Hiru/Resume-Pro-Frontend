import React from "react";
import Input from "../Inputs/Input.component";

const ContactInfoForm = ({ contactInfo, updateSection }) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-2">
          <Input
            label="Address"
            placeholder="Please enter your home address"
            type="text"
            value={contactInfo.location || ""}
            onChange={({ target }) => updateSection("location", target.value)}
          />
        </div>
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={contactInfo.email || ""}
          onChange={({ target }) => updateSection("email", target.value)}
        />
        <Input
          label="Contact Number"
          placeholder="Enter your contact number"
          type="phone"
          value={contactInfo.phone || ""}
          onChange={({ target }) => updateSection("phone", target.value)}
        />
        <Input
          label="LinkedIn profile"
          placeholder="https://linkedin.com/in/user-name"
          type="text"
          value={contactInfo.linkedin || ""}
          onChange={({ target }) => updateSection("linkedin", target.value)}
        />
        <Input
          label="Github profile"
          placeholder="https://github.com/user-name"
          type="text"
          value={contactInfo.github || ""}
          onChange={({ target }) => updateSection("github", target.value)}
        />
        <div className="md:col-span-2">
          <Input
            label="Portfolio"
            placeholder="https://your-website.com"
            type="text"
            value={contactInfo.website || ""}
            onChange={({ target }) => updateSection("website", target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
