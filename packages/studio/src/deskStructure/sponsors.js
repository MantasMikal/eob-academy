import { FaHandshake } from "react-icons/fa";
import S from "@sanity/desk-tool/structure-builder";

const sponsors = S.listItem()
  .title("Sponsors")
  .schemaType("sponsor")
  .child(S.documentTypeList("sponsor").title("Sponsors"))
  .icon(FaHandshake);

export default sponsors;
