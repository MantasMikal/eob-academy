import S from '@sanity/desk-tool/structure-builder'
import {
  MdBusiness,
  MdSettings,
  MdGroup,
  MdLibraryBooks,
  MdHome,
  MdInfoOutline
} from 'react-icons/md'
import { FaFile, FaPhone } from 'react-icons/fa'
import { FiFileText, FiBook } from 'react-icons/fi'
import { TiContacts } from 'react-icons/ti'
import { AiFillFlag } from 'react-icons/ai'
import { RiPagesLine } from 'react-icons/ri'
import { GoSignIn } from 'react-icons/go'
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
  'homePage',
  'teamsPage',
  'team'
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
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(
                  S.editor()
                    .id('homePage')
                    .schemaType('homePage')
                    .documentId('homePage')
                )
                .icon(MdHome),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('contactPage')
                    .documentId('contactPage')
                )
                .icon(FaPhone),
              S.listItem()
                .title('Teams')
                .child(
                  S.editor()
                    .id('teamsPage')
                    .schemaType('teamsPage')
                    .documentId('teamsPage')
                )
                .icon(RiPagesLine),
              S.listItem()
                .title('About')
                .child(
                  S.editor()
                    .id('aboutPage')
                    .schemaType('page')
                    .documentId('about')
                )
                .icon(MdInfoOutline),
              S.listItem()
                .title('Apply')
                .child(
                  S.editor()
                    .id('applyPage')
                    .schemaType('page')
                    .documentId('apply')
                )
                .icon(GoSignIn),
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
        .title('Teams')
        .schemaType('team')
        .child(S.documentTypeList('team').title('Teams'))
        .icon(AiFillFlag),
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
