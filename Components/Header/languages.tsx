import Link from "next/link";
import React from "react";

interface Language {
  value: string;
  label: string;
  path:string;
}

const LanguageSelector: React.FC = () => {
  const languages: Language[] = [
    { value: "English", label: "English",path:"/english" },
    { value: "Hindi", label: "Hindi",path:"/hindi" },
    { value: "Chinese", label: "Chinese ",path:"/chines" },
    // Add more languages as needed
  ];

  return (
    <select className="bg-black border-none ring-offset-0 outline-none hover:   ">
      {languages.map((language) => (
        <option key={language.value} value={language.value}>
          {language.label}
        
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
