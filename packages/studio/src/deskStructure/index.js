import { FaPhone, FaEdit, FaEye } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { MdSettings, MdHome, MdInfoOutline, MdBusiness } from "react-icons/md";
import S from "@sanity/desk-tool/structure-builder";

import gallery from "./gallery";
import PagePreview from "../components/previews/page/PagePreview";
import posts from "./posts";
import sponsors from "./sponsors";

const hiddenTypes = [
  "category",
  "companyInfo",
  "post",
  "siteSettings",
  "contactPage",
  "homePage",
  "blogPost",
  "galleryPost",
  "about",
  "sponsor",
  "aboutPage",
  "gallery",
  "page",
];

export default () =>
  S.list()
    .title("IRL")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      S.listItem()
        .title("Company Info")
        .child(
          S.editor()
            .id("companyInfo")
            .schemaType("companyInfo")
            .documentId("companyInfo")
        )
        .icon(MdBusiness),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .child(
                  S.editor()
                    .id("homePage")
                    .schemaType("homePage")
                    .documentId("homePage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() => PagePreview({ slug: "/" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )
                .icon(MdHome),
              S.listItem()
                .title("Contact")
                .child(
                  S.editor()
                    .id("contactPage")
                    .schemaType("contactPage")
                    .documentId("contactPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() => PagePreview({ slug: "/contact" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )
                .icon(FaPhone),
              S.listItem()
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() => PagePreview({ slug: "/about" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(MdInfoOutline),
              S.listItem()
                .title("Terms And Conditions")
                .child(
                  S.editor()
                    .id("termsAndConditionsPage")
                    .schemaType("page")
                    .documentId("termsAndConditionsPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() =>
                          PagePreview({ slug: "/terms-and-conditions" })
                        )
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                ),
              S.listItem()
                .title("Cookie policiy")
                .child(
                  S.editor()
                    .id("cookiePolicyPage")
                    .schemaType("page")
                    .documentId("cookiePolicyPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() =>
                          PagePreview({ slug: "/cookie-policy" })
                        )
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                ),
            ])
        )
        .icon(GrDocumentText),
      sponsors,
      posts,
      gallery,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
