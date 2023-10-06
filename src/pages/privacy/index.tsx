import React from "react";
import { InfoPage } from "src/components/base";
import { content, title } from "src/copy/privacy";

const sections = [
  { id: "preface", title: "Preface" },
  { id: "terminology", title: "Terminology" },
  { id: "data-we-collect", title: "Data we collect" },
  { id: "data-we-share", title: "Data we share" },
  { id: "data-security", title: "Data security" },
  { id: "your-rights", title: "Your rights" },
  { id: "questions", title: "Questions" },
];

const Privacy: React.FC = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default Privacy;
