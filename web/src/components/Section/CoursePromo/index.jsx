import React from "react";
import { array, string } from "prop-types";
import { cn } from "lib/helpers";
import { useDarkContext } from "Context/DarkContext";

import BlockContent from "../../block-content";
import Container from "Primitive/Container";
import SponsorCarousel from "../../Common/SponsorCarousel";

import styles from "./CoursePromo.module.scss";

const CoursePromo = ({ blockContent, sponsors }) => {
  const isDark = useDarkContext();
  return (
    <Container
      className={cn(styles.CoursePromo, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      as="section"
    >
      <BlockContent blocks={blockContent} />
      <SponsorCarousel className={styles.SponsorCarousel} sponsors={sponsors} />
    </Container>
  );
};

CoursePromo.propTypes = {
  blockContent: array
};

export default CoursePromo;
