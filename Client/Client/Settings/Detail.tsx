import React from "react";
import FourOhFour from "../../../Components/FourOhFour";
import { AppContextType } from "../../../Utils/Types";
import Pages from "./Pages";

const AppSettingsDetail: React.FC<{
  context: AppContextType;
  match: { params: { detailId } };
}> = ({
  match: {
    params: { detailId },
  },
  context,
}) => {
  const Page = Pages[detailId] || FourOhFour;
  return <Page context={context} />;
};

export default AppSettingsDetail;
