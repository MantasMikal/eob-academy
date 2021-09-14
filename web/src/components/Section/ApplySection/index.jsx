import React from "react";
import { string } from "prop-types";
import { cn } from "lib/helpers";
import { useDarkContext } from "Context/DarkContext";
import HubspotForm from "react-hubspot-form";

import Container from "Primitive/Container";
import Type from "Primitive/Type";
import BlockContent from "../../block-content";

import styles from "./ApplySection.module.scss";
import Spinner from "../../Primitive/Spinner";

const Index = ({ title, blocks }) => {
  const isDark = useDarkContext();

  return (
    <Container
      className={cn(styles.ApplySection, isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        {title}
      </Type>
      <div className={styles.Wrapper}>
        {blocks && (
          <div className={styles.Description}>
            <BlockContent blocks={blocks} />
          </div>
        )}

        <Type as="h1" size="displayMedium" className={styles.Title}>
          Application form
        </Type>
        <div className={styles.Form}>
          <HubspotForm
            portalId="24888008"
            formId="76b72dd9-bd61-4614-82fb-e42421c72f03"
            region="eu1"
            loading={<Spinner size={80} />}
          />
        </div>
      </div>
    </Container>
  );
};

Index.propTypes = {
  title: string,
};

export default Index;
