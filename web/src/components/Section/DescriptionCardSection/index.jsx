import React from "react";

import Container from "Primitive/Container";
import DescriptionCards from "Common/DescriptionCards";
import ButtonStandard from "Primitive/ButtonStandard";

import styles from "./DescriptionCardSection.module.scss";
import Type from "../../Primitive/Type";
import { useDarkContext } from "../../Context/DarkContext";
import classNames from "classnames";

const DescriptionCardSection = ({ cards }) => {
  const isDark = useDarkContext();
  return (
    <Container size="wide" center gutter spacious as="section">
      <div className={classNames(styles.Cta, isDark && styles.isDark)}>
        <Type className={styles.CtaTitle} size="displayLarge">
          We're hiring!
        </Type>
        <Container size="medium" center>
          <Type className={styles.CtaSubtitle} size="base">
            EOB Academy gives young people access to learn about video game
            creation and esports from fantastic tutors in great environments -
            be it online through Discord or at one of our physical locations in
            Letchworth.
          </Type>
        </Container>
        <ButtonStandard href="/jobs" target="_blank" size="medium">
          Get involved
        </ButtonStandard>
      </div>
      <DescriptionCards cards={cards} />
    </Container>
  );
};

DescriptionCardSection.propTypes = {};

export default DescriptionCardSection;
