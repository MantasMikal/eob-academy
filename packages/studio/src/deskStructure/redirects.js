import { FaLink } from "react-icons/fa";
import S from "@sanity/desk-tool/structure-builder";

const redirects = S.listItem()
  .title("Redirects")
  .schemaType("redirect")
  .child(
    S.documentTypeList("redirect")
      .title("Redirect")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("redirect")
      )
  )

  .icon(FaLink);

export default redirects;
