import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings, MdGroup, MdLibraryBooks, MdHome } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'
import { FiFileText, FiBook } from 'react-icons/fi'
import { TiContacts } from 'react-icons/ti'

const hiddenTypes = [
  'category',
  'companyInfo',
  'page',
  'person',
  'post',
  'project',
  'siteSettings',
  'sponsors',
  'coursesPage',
  'course',
  'seo-plugin',
  'contactPage',
  'homePage'
]

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(MdBusiness),
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        )
        .icon(MdHome),
      S.listItem()
        .title('Contact Page')
        .child(
          S.editor()
            .id('contactPage')
            .schemaType('contactPage')
            .documentId('contactPage')
        )
        .icon(TiContacts),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                ),
              S.listItem()
                .title('Terms And Conditions')
                .child(
                  S.editor()
                    .id('termsAndConditionsPage')
                    .schemaType('page')
                    .documentId('termsAndConditions')
                ),
              S.listItem()
                .title('Privacy Statement')
                .child(
                  S.editor()
                    .id('privacyStatement')
                    .schemaType('page')
                    .documentId('privacyStatement')
                )
            ])
        )
        .icon(FaFile),
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts'))
        .icon(FiFileText),
      S.listItem()
        .title('Blog Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Category')),
      S.listItem()
        .title('Sponsors')
        .child(
          S.editor()
            .id('sponsors')
            .schemaType('sponsors')
            .documentId('sponsors')
        )
        .icon(MdGroup),
      S.listItem()
        .title('Courses')
        .child(
          S.list()
            .title('Courses')
            .items([
              // S.listItem()
              //   .title("Prince's trust courses")
              //   .child(
              //     S.editor()
              //       .id('princesTrustCourses')
              //       .schemaType('coursesPage')
              //       .documentId('princesTrustCourses')
              //   ),
              S.listItem()
                .title('College Courses')
                .child(
                  S.editor()
                    .id('collegeCourses')
                    .schemaType('coursesPage')
                    .documentId('collegeCourses')
                ),
              S.listItem()
                .title('Alternative Schools Provision')
                .child(
                  S.editor()
                    .id('alternativeSchoolsCourses')
                    .schemaType('coursesPage')
                    .documentId('alternativeSchoolsCourses')
                ),
              S.listItem()
                .title('Online')
                .child(
                  S.editor()
                    .id('onlineCourses')
                    .schemaType('coursesPage')
                    .documentId('onlineCourses')
                )
            ])
        )
        .icon(FiBook),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ])
