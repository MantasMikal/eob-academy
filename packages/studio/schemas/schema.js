// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import about from "./pages/about";
import blockContent from "./objects/blockContent";
import blockText from "./objects/blockText";
import category from "./documents/category";
import contact from "./pages/contact";
import contentBlock from "./objects/contentBlock";
import figure from "./plugs/figure";
import gallery from './documents/gallery'
import grid from "./plugs/grid";
import home from "./pages/home";
import itemGallery from "./plugs/itemGallery";
import location from "./plugs/location";
import mainImage from "./plugs/mainImage";
import openGraph from "./objects/openGraph";
import page from "./pages/page";
import post from './documents/post'
import sponsor from './documents/sponsor'
import video from "./plugs/video";
import splitPanel from "./objects/split-panel";
import course from "./documents/course";
import courseCategory from "./documents/course-category";
import courseOverview from "./documents/course-overview";
import testimonials from "./pages/testimonials";
import apply from "./pages/apply";
import missionStatement from "./objects/missionStatement";
import industryRoles from "./objects/industryRoles";
import featuredCourses from "./objects/featuredCourses";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    figure,
    mainImage,
    video,
    contentBlock,
    grid,
    location,
    contact,
    home,
    openGraph,
    about,
    post,
    sponsor,
    testimonials,
    gallery,
    itemGallery,
    page,
    splitPanel,
    course,
    courseCategory,
    courseOverview,
    apply,
    missionStatement,
    industryRoles,
    featuredCourses
  ]),
});
