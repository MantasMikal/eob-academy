import { FaPhone, FaEdit, FaEye } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import { MdHome, MdInfoOutline } from "react-icons/md";
import { RiFileCodeFill } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";

import S from "@sanity/desk-tool/structure-builder";

import gallery from "./gallery";
import posts from "./posts";
import sponsors from "./sponsors";
import courses from "./courses";
import pages from "./pages";
import resolvePreviewUrl from "../resolvePreviewUrl";
import Iframe from "sanity-plugin-iframe-pane";
import redirects from "./redirects";
import jobs from "./jobs";
import protectedPages from "./protectedPages";
import team from "./team";

const hiddenTypes = [
  "category",
  "companyInfo",
  "post",
  "siteSettings",
  "contactPage",
  "testimonialPage",
  "howWeOperatePage",
  "homePage",
  "blogPost",
  "applyPage",
  "galleryPost",
  "about",
  "sponsor",
  "aboutPage",
  "gallery",
  "page",
  "protectedPage",
  "course",
  "courseOverview",
  "courseCategory",
  "redirect",
  "job",
  "teamMember",
  "pdf",
  'teamPage',
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
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(``),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
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
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`contact`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
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
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`about`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(MdInfoOutline),
              S.listItem()
                .title("How We Operate")
                .child(
                  S.editor()
                    .id("howWeOperatePage")
                    .schemaType("howWeOperatePage")
                    .documentId("howWeOperatePage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`how-we-operate`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
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
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`apply`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
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
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`testimonials`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(GiConversation),
              S.listItem()
                .title("Team")
                .child(
                  S.editor()
                    .id("teamPage")
                    .schemaType("teamPage")
                    .documentId("teamPage")
                    .views([
                      S.view.form().icon(FaEdit),
                      S.view
                        .component(Iframe)
                        .options({
                          url: () => resolvePreviewUrl(`team`),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .icon(FaEye)
                        .title("Preview"),
                    ])
                )

                .icon(AiOutlineTeam),
            ])
        )
        .icon(RiFileCodeFill),
      pages,
      protectedPages,
      courses,
      sponsors,
      posts,
      gallery,
      redirects,
      jobs,
      team,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
