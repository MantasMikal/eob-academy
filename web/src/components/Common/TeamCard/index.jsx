import React from "react";
import { string } from "prop-types";
import { useDarkContext } from "Context/DarkContext";
import { cn } from "lib/helpers";

import Icon from "Primitive/Icon";
import Type from "Primitive/Type";
import Media from "Common/Media";
import SmartLink from "Primitive/SmartLink";
import ButtonStandard from "Primitive/ButtonStandard";

import styles from "./TeamCard.module.scss";

// TODO
// Replace Icon with image if using CMS

const TeamCard = ({
  logo,
  title,
  description,
  contact,
  phone,
  email,
  discord,
  slug,
  address,
  className,
}) => {
  const isDark = useDarkContext();
  return (
    <div className={cn(styles.TeamCard, isDark && styles.isDark, className)}>
      <Media media={logo} />
      <Type className={styles.Title} size="titleLarge">
        {title}
      </Type>
      <Type className={styles.Description} size="base">
        {description}
      </Type>
      <Type size="base" className={styles.TeamDescription}>
        {address}
      </Type>
      <div className={styles.Contact}>
        <SmartLink href={`tel:${phone}`}>
          <Icon type="phone" className={styles.Icon} width={35} height={35} />
        </SmartLink>
        <SmartLink href={`mailto:${email}`}>
          <Icon type="email" className={styles.Icon} width={35} height={35} />
        </SmartLink>
        <SmartLink href={discord}>
          <Icon type="discord" className={styles.Icon} width={35} height={35} />
        </SmartLink>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  icon: string,
  title: string,
  description: string,
};

export default TeamCard;
