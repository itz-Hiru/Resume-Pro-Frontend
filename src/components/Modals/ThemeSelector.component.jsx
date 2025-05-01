import React, { useEffect, useRef, useState } from "react";
import {
  DUMMY_RESUME_DATA,
  resumeTemplates,
  themeColorPalette,
} from "../../utils/data.util";
import { LuCircleCheckBig } from "react-icons/lu";
import Tabs from "../Tabs/Tabs.component";
import TemplateCard from "../Cards/TemplateCard.component";

const TAB_DATA = [{ label: "Templates" }, { label: "Color Palettes" }];

const ThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
  resumeData,
  onClose,
}) => {
  const resumeRef = useRef(null);

  const [baseWidth, setBaseWidth] = useState(800);
  const [tabValue, setTabValue] = useState("Templates");

  const [selectedColorPalette, setSelectedColorPalette] = useState({
    colors: selectedTheme?.colorPalette,
    index: -1,
  });
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: selectedTheme?.theme || "",
    index: -1,
  });

  // handle theme change
  const handleThemeSelection = () => {
    setSelectedTheme({
      colorPalette: selectedColorPalette?.colors,
      theme: selectedTemplate?.theme,
    });
    onClose();
  };

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="flex items-center justify-between mb-5 mt-2">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />
        <button
          className="btn-small-light"
          onClick={() => handleThemeSelection()}
        >
          <LuCircleCheckBig className="text-[16px]" />
          Done
        </button>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5 bg-white">
          <div className="grid grid-cols-2 gap-5 max-h-[80vh] overflow-scroll custom-scrollbar md:px-5">
            {tabValue === "Templates" &&
              resumeTemplates.map((template, index) => (
                <TemplateCard
                  key={`template_${index}`}
                  thumbnailImg={template.thumbnailImage}
                  isSelected={selectedTemplate?.index === index}
                  onSelect={() =>
                    setSelectedTemplate({ theme: template.id, index })
                  }
                />
              ))}
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-7 bg-white -mt-3"
          ref={resumeRef}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSelector;
