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
import { RiSuitcaseFill as MainIcon } from "react-icons/ri";
import { toPlainText } from 'part:social-preview/utils'
import resolvePreviewUrl from "../resolvePreviewUrl";
import Iframe from "sanity-plugin-iframe-pane";

export const icons = {
  MainIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
};

export default S.listItem()
  .title("Jobs")
  .icon(MainIcon)
  .child(
    S.list()
      .title("Content")
      .items([
        S.listItem()
          .title("Published jobs")
          .schemaType("job")
          .icon(MainIcon)
          .child(
            S.documentList("job")
              .title("Published jobs")
              .menuItems(S.documentTypeList("job").getMenuItems())
              // Only show jobs with publish date earlier than now and that is not drafts
              .filter(
                '_type == "job" && !(_id in path("drafts.**"))'
              )
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType("job")
                  .views([
                    S.view.form().icon(FaEdit),
                    S.view
                    .component(Iframe)
                    .options({
                      url: (doc) =>
                        resolvePreviewUrl(`careers/${doc?.slug?.current}`),
                        reload: {
                          button: true,
                          revision: true,
                        },
                    })
                    
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
                              siteUrl: `${config.siteUrl}/careers/${slug.current}`,
                              ogImage: openGraph?.image || mainImage,
                            };
                          },
                        })
                      )
                      .title("Social & SEO"),
                  ])
              )
          ),
        S.documentTypeListItem("job").title("All jobs").icon(AllIcon)
      ])
  );
