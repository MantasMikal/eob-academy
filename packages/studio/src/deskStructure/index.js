import { FaPhone, FaEdit, FaEye } from "react-icons/fa";
import { GiConversation } from "react-icons/gi"
import { MdHome, MdInfoOutline } from "react-icons/md";
import {RiFileCodeFill} from "react-icons/ri";
import S from "@sanity/desk-tool/structure-builder";

import gallery from "./gallery";
import posts from "./posts";
import sponsors from "./sponsors";
import courses from "./courses";
import pages from "./pages";
import PagePreview from "../components/previews/pagePreview/PagePreview";

const hiddenTypes = [
  "category",
  "companyInfo",
  "post",
  "siteSettings",
  "contactPage",
  "testimonialPage",
  "homePage",
  "blogPost",
  "applyPage",
  "galleryPost",
  "about",
  "sponsor",
  "aboutPage",
  "gallery",
  "page",
  "course",
  "courseOverview",
  "courseCategory",
];

export default () =>
  S.list()
    .title("EOB Academy")
    .items([
      S.listItem()
        .title("Custom Pages")
        .child(
          S.list()
            .title("Custom Pages")
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
                        .component(() => PagePreview({ slug: "" }))
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
                        .component(() => PagePreview({ slug: "contact" }))
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
                        .component(() => PagePreview({ slug: "about" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(MdInfoOutline),
                S.listItem()
                .title("Apply")
                .child(
                  S.editor()
                    .id("applyPage")
                    .schemaType("applyPage")
                    .documentId("applyPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() => PagePreview({ slug: "apply" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(MdInfoOutline),
                S.listItem()
                .title("Testimonials")
                .child(
                  S.editor()
                    .id("testimonialPage")
                    .schemaType("testimonialPage")
                    .documentId("testimonialPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(() => PagePreview({ slug: "testimonials" }))
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(GiConversation),
            ])
        )
        .icon(RiFileCodeFill),
      pages,
      courses,
      sponsors,
      posts,
      gallery,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
