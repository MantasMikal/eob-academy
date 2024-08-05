import S from "@sanity/desk-tool/structure-builder";
import {
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from "react-icons/go";
import { AiOutlineTeam as PageIcon } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export const icons = {
  PageIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon: PageIcon,
};

export default S.listItem()
  .title("Team Members")
  .icon(PageIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published Members")
          .schemaType("teamMember")
          .icon(PageIcon)
          .child(
            S.documentList("teamMember")
              .title("Published members")
              .menuItems(S.documentTypeList("teamMember").getMenuItems())
              .filter('_type == "teamMember" && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("teamMember")
                  .views([S.view.form().icon(FaEdit)])
              )
          ),
        S.documentTypeListItem("teamMember").title("All Members").icon(AllIcon),
      ])
  );
