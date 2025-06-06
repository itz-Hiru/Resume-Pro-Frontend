import moment from "moment";
import React, { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard.component";
import CreateResumeForm from "../../components/Forms/CreateResumeForm.component";
import DashboardLayout from "../../components/Layouts/DashboardLayout.component";
import Modal from "../../components/Modals/Modal.component";
import { API_PATHS } from "../../utils/apiPath.util";
import axiosInstance from "../../utils/axiosInstance.util";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResumes, setAllResumes] = useState(null);

  const fetchAllResumes = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.RESUME.GET_ALL_RESUMES
      );
      setAllResumes(response.data.resumes) ? response.data.resumes : [];
    } catch (error) {
      console.error("Error fetching resumes: ", error);
    }
  };

  useEffect(() => {
    fetchAllResumes();
  }, []);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
        <div
          className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-indigo-300 hover:bg-purple-50/5 cursor-pointer"
          onClick={() => setOpenCreateModal(true)}
        >
          <div className="w-12 h-12 flex items-center justify-center bg-indigo-200/60 rounded-2xl">
            <LuCirclePlus className="text-xl text-indigo-500" />
          </div>
          <h3 className="font-medium text-gray-800">Add new Resume</h3>
        </div>
        {allResumes?.map((resume) => (
          <ResumeSummaryCard
            key={resume?._id}
            imgUrl={resume?.thumbnailLink || null}
            title={resume.title}
            lastUpdated={
              resume?.updatedAt
                ? moment(resume.updatedAt).format("Do MMM YYYY")
                : ""
            }
            onSelect={() => navigate(`/resume/${resume?._id}`)}
          />
        ))}
      </div>
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <div className="">
          <CreateResumeForm />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
