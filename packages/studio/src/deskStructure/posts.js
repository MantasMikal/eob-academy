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
import { RiArticleLine as BlogIcon } from "react-icons/ri";
import PostPreview from "../components/previews/postPreview/PostPreview";
import { toPlainText } from 'part:social-preview/utils'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

export default S.listItem()
  .title("Blog Posts")
  .icon(BlogIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published posts")
          .schemaType("post")
          .icon(BlogIcon)
          .child(
            S.documentList("post")
              .title("Published posts")
              .menuItems(S.documentTypeList("post").getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter(
                '_type == "post" && !(_id in path("drafts.**"))'
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("post")
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
                              siteUrl: `${config.siteUrl}/blog/${slug.current}`,
                              ogImage: openGraph?.image || mainImage,
                            };
                          },
                        })
                      )
                      .title("Social & SEO"),
                  ])
              )
          ),
        S.documentTypeListItem("post").title("All posts").icon(AllIcon),
        S.listItem()
          .title("Post by category")
          .child(
            // List out all categories
            S.documentTypeList("category")
              .title("Post by category")
              .child((catId) =>
                // List out post documents where the _id for the selected
                // category appear as a _ref in the post’s categories array
                S.documentList()
                  .schemaType("post")
                  .title("Post")
                  .filter('_type == "post" && $catId in category[]._ref')
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("category").title("Categories"),
      ])
  );
