import React from "react";
import { array, string } from "prop-types";
import { cn } from "lib/helpers";
import { useDarkContext } from "Context/DarkContext";

import BlockContent from "../../block-content";
import Container from "Primitive/Container";
import Type from "Primitive/Type";
import TeamCard from "Common/TeamCard";
import Map from "Common/Map";

import styles from "./TeamsSection.module.scss";

const Index = ({ teams, blocks, title }) => {
  const isDark = useDarkContext();
  return (
    <Container
      className={cn(styles.TeamsSection, isDark && styles.isDark)}
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
      {blocks && <BlockContent blocks={blocks} />}
      <div className={styles.TeamGrid}>
        {teams.length > 0 &&
          teams.map((team) => {
            return (
              <div className={styles.Team}>
                <TeamCard
                  key={team._key}
                  {...team}
                  className={styles.TeamCard}
                />
                <div className={styles.MapWrapper}>
                  <Map
                    center={team.location}
                    locations={[team.location]}
                    maxHeight={"400px"}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

Index.propTypes = {
  title: string,
};

export default Index;
