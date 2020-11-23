import React, { useEffect, useState } from "react";
import { AppContextType, ModelType } from "../../../Utils/Types";

const AppSupportTicketDetail: React.FC<{
  match: { isExact: boolean; params: { detailId } };
  context: AppContextType;
  action: string;
  model: ModelType;
}> = ({
  context,
  action,
  match: {
    isExact,
    params: { detailId },
  },
  model,
}) => {
  // Vars

  // Lifecycle
  useEffect(() => {}, []);

  // UI
  return (
    <context.UI.Object.Detail
      context={context}
      model={model}
      layoutId="agent-detail"
      objectId={detailId}
      baseUrl="/support/tickets"
    />
  );
};

export default AppSupportTicketDetail;
