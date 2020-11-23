import { ObjectType } from "../../Utils/Types";

export interface AppTicketType extends ObjectType {
  data: { name: string; title: string };
}
