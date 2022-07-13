import S from "@sanity/desk-tool/structure-builder";

import SocialPreview from "part:social-preview/component";
import config from "../../config";
import {
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from "react-icons/go";
import { FaEdit, FaEye } from "react-icons/fa";
import { GiMoebiusTriangle as BlogIcon } from "react-icons/gi";
import { toPlainText } from 'part:social-preview/utils'
import PagePreview from "../components/previews/page/PagePreview";

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

export default S.listItem()
  .title("Regular Pages")
  .icon(BlogIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published pages")
          .schemaType("page")
          .icon(BlogIcon)
          .child(
            S.documentList("page")
              .title("Published pages")
              .menuItems(S.documentTypeList("page").getMenuItems())
              // Only show courses with publish date earlier than now and that is not drafts
              .filter(
                '_type == "page" && !(_id in path("drafts.**"))'
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("page")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                      .component(PagePreview)
                      .icon(FaEye)
                      .title("Web Preview"),
                    S.view
                      .component(
                        SocialPreview({
                          // Overwrite prepareFunction to pick the right fields
                          prepareFunction: (
                            {
                              title,
                              excerpt,
                              openGraph,
                              mainImage,
                              slug,
                            } /* this object is the currently active document */
                          ) => {
                            return {
                              title: openGraph?.title || title || 'Untitled',
                              description: excerpt || toPlainText(openGraph?.description || []),
                              siteUrl: `${config.siteUrl}/${slug.current}`,
                              ogImage: openGraph?.image || mainImage,
                            };
                          },
                        })
                      )
                      .title("Social & SEO"),
                  ])
              )
          ),
        S.documentTypeListItem("page").title("All pages").icon(AllIcon)
      ])
  );
