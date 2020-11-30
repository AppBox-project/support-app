import FourOhFour from "../../Components/FourOhFour";
import { FaDashcube, FaTicketAlt } from "react-icons/fa";
import AppSupportTickets from "./Tickets";
import AppSettings from "./Settings";

export default class App {
  context: any;

  constructor(context) {
    this.context = context;
  }

  appConfig = {
    actions: {
      filter: false,
      group: true,
      mobile: { displayAs: "bottom-navigation" },
    },
    settings: AppSettings,
  };

  getActions = () => {
    return new Promise((resolve) => {
      resolve([
        {
          key: "overview",
          label: "Overview",
          component: FourOhFour,
          icon: FaDashcube,
        },
        {
          key: "tickets",
          label: "Tickets",
          component: AppSupportTickets,
          icon: FaTicketAlt,
          group: "Tickets",
        },
      ]);
    });
  };
}
