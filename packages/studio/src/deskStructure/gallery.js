import { FaEdit, FaEye, FaImage as GalleryIcon } from "react-icons/fa";
import S from "@sanity/desk-tool/structure-builder";

import PagePreview from "../components/previews/page/PagePreview";

export const icons = {
  GalleryIcon,
};

const gallery = S.listItem()
  .title("Gallery")
  .schemaType("gallery")
  .child(
    S.documentTypeList("gallery")
      .title("Gallery")
      .child((documentId) =>
        S.document()
          .documentId(documentId)
          .schemaType("gallery")
          .views([
            S.view.form().icon(FaEdit),
            S.view
              .component(() => PagePreview({ slug: "/gallery" }))
              .icon(FaEye)
              .title("Web Preview"),
          ])
      )
  )

  .icon(GalleryIcon);

export default gallery;
