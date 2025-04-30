import React from "react";
import TemplateOne from "./Templates/TemplateOne.component";

const RenderResume = ({
  templateId,
  resumeData,
  colorPalette,
  containerWidth,
}) => {
  switch (templateId) {
    case "01":
      return (
        <TemplateOne
          resumeData={resumeData}
          colorPalette={colorPalette}
          containerWidth={containerWidth}
        />
      );
    default:
      return (
        <TemplateOne
          resumeData={resumeData}
          colorPalette={colorPalette}
          containerWidth={containerWidth}
        />
      );
  }
};

export default RenderResume;
