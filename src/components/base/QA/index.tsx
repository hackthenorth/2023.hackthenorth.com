import React from "react";
import { IS_PRODUCTION } from "src/utils/env";

import OrganizerTools from "./OrganizerTools";

const QA: React.FC = () => {
  return (
    <span>
      <OrganizerTools
        bugnub={{
          repoName: "hackthenorth.com",
          token: "9RQYZyziWGRIfGFZEkLNhlpskAt9T24D",
        }}
      />
    </span>
  );
};

export default QA;
