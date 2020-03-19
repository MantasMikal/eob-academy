import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings, MdGroup, MdLibraryBooks } from "react-icons/md";
import { FaFile } from "react-icons/fa";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "project",
  "siteSettings",
  "sponsors",
  "coursesPage",
  "course",
  "seo-plugin",
  "category"
];

export default () =>
  S.list()
    .title("Content")
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
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("About")
                .child(
                  S.editor()
                    .id("aboutPage")
                    .schemaType("page")
                    .documentId("about")
                )
                .icon(FaFile),
              S.listItem()
                .title("Contact")
                .child(
                  S.editor()
                    .id("contactPage")
                    .schemaType("page")
                    .documentId("contact")
                )
                .icon(FaFile)
            ])
        ),
      S.listItem()
        .title("Sponsors")
        .child(
          S.editor()
            .id("sponsors")
            .schemaType("sponsors")
            .documentId("sponsors")
        )
        .icon(MdGroup),
      S.listItem()
        .title("Courses")
        .child(
          S.editor()
            .id("coursesPage")
            .schemaType("coursesPage")
            .documentId("coursesPage")
        )
        .icon(MdLibraryBooks),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
