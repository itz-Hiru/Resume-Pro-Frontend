import React from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import Input from "../Inputs/Input.component";

const CertificationsForm = ({
  certificationsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Certifications Details
      </h2>
      <div className="mt-4 flex flex-col gap-4 mb-3">
        {certificationsInfo.map((certification, index) => (
          <div
            key={index}
            className="border border-gray-200/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Certification Title"
                placeholder="Enter certification title"
                type="text"
                value={certification.title || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "title", target.value)
                }
              />
              <Input
                label="Issuer"
                placeholder="Courses/ Google/ LinkedIn etc."
                type="text"
                value={certification.issuer || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issuer", target.value)
                }
              />
              <Input
                label="Year"
                placeholder="Enter year you got certification"
                type="text"
                value={certification.year || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "year", target.value)
                }
              />
            </div>
            {certificationsInfo.length > 1 && (
              <button
                type="button"
                className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-green-100 text-green-800 text-sm font-semibold hover:bg-green-200 cursor-pointer"
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              year: "",
            })
          }
        >
          <LuPlus />
          Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationsForm;
