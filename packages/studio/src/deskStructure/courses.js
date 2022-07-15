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
import { HiAcademicCap as DocumentIcon } from "react-icons/hi";
import PostPreview from "../components/previews/postPreview/PostPreview";
import { toPlainText } from 'part:social-preview/utils'

export const icons = {
  DocumentIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

export default S.listItem()
  .title("Courses")
  .icon(DocumentIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published courses")
          .schemaType("course")
          .icon(DocumentIcon)
          .child(
            S.documentList("course")
              .title("Published courses")
              .menuItems(S.documentTypeList("course").getMenuItems())
              // Only show courses with publish date earlier than now and that is not drafts
              .filter(
                '_type == "course" && !(_id in path("drafts.**"))'
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("course")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                      .component(PostPreview)
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
                              siteUrl: `${config.siteUrl}/course/${slug.current}`,
                              ogImage: openGraph?.image || mainImage,
                            };
                          },
                        })
                      )
                      .title("Social & SEO"),
                  ])
              )
          ),
        S.documentTypeListItem("course").title("All courses").icon(AllIcon),
        S.listItem()
          .title("Course by category")
          .child(
            // List out all categories
            S.documentTypeList("courseCategory")
              .title("Course by category")
              .child((catId) =>
                // List out post documents where the _id for the selected
                // category appear as a _ref in the post’s categories array
                S.documentList()
                  .schemaType("course")
                  .title("Course")
                  .filter('_type == "course" && $catId in category[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("courseCategory").title("Categories"),
      ])
  );
