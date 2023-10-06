import React from "react";
import { InfoPage } from "src/components/base";
import { content, title } from "src/copy/travelGuidelines";

const sections = [
  { id: "key-points", title: "Key Points" },
  { id: "reimbursement-policy", title: "Reimbursement Policy" },
  { id: "flights", title: "Flights" },
  { id: "driving", title: "Driving" },
  { id: "hack-the-north-buses", title: "Hack the North Buses" },
  { id: "other", title: "Other" },
  { id: "travel-restrictions", title: "Travel Restrictions" },
  { id: "visa", title: "Visa" },
  { id: "flight-websites", title: "Flight Websites" },
];

const TravelGuidelines: React.FC = () => (
  <InfoPage sections={sections} content={content} title={title} />
);

export default TravelGuidelines;
