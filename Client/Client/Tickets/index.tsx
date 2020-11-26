import React, { useState, useEffect } from "react";
import {
  AppContextType,
  ListDetailItemType,
  ModelType,
} from "../../../Utils/Types";
import { AppTicketType } from "../Types";
import AppSupportTicketDetail from "./Detail";

const AppSupportTickets: React.FC<{ action; context: AppContextType }> = ({
  action,
  context,
}) => {
  // Vars
  const [tickets, setTickets] = useState<AppTicketType[]>();
  const [ticketList, setTicketList] = useState<ListDetailItemType[]>();
  const [model, setModel] = useState<ModelType>();

  // Lifecycle
  useEffect(() => {
    const request = context.getObjects("support-tickets", {}, (response) => {
      if (response.success) {
        setTickets(response.data);
        const tl: ListDetailItemType[] = [];
        response.data.map((ticket: AppTicketType) => {
          tl.push({
            id: ticket._id,
            label: ticket.data.title,
            subtitle: ticket.data.name,
          });
        });
        setTicketList(tl);
      } else {
        console.log(response);
      }
    });

    const modelRequest = context.getModel("support-tickets", (response) => {
      if (response.success) {
        setModel(response.data);
      } else {
        console.log(response);
      }
    });

    return () => {
      request.stop();
      modelRequest.stop();
    };
  }, []);

  // UI
  if (!model) return <context.UI.Loading />;
  return (
    <context.UI.Layouts.ListDetailLayout
      context={context}
      list={ticketList}
      baseUrl="/support/tickets"
      DetailComponent={AppSupportTicketDetail}
      title="Tickets"
      detailComponentProps={{ model, tickets }}
    />
  );
};

export default AppSupportTickets;
