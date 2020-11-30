import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AppContextType } from "../../../Utils/Types";
import AppSettingsDetail from "./Detail";

const AppSettings: React.FC<{ context: AppContextType }> = ({ context }) => {
  return (
    <context.UI.Layouts.ListDetailLayout
      context={context}
      baseUrl="/support/settings"
      DetailComponent={AppSettingsDetail}
      navWidth={3}
      list={[
        {
          label: "Portal",
          id: "portal",
          icon: FaChalkboardTeacher,
          subtitle: "Let users see their tickets.",
        },
      ]}
      title="Settings"
    />
  );
};

export default AppSettings;
