import React from "react";

import ResponsiveMedia from "Primitive/ResponsiveMedia";
import Type from "Primitive/Type";
import Container from "Primitive/Container";
import { cn } from "lib/helpers";
import qs from "query-string";

import styles from "./ContactHero.module.scss";
import Media from "../Media";
import SmartLink from "Primitive/SmartLink";
import Icon from "Primitive/Icon";
import ButtonStandard from "Primitive/ButtonStandard";

import { useDarkContext } from "Context/DarkContext";

const ContactHero = ({ image, title, subtitle, contactInfo }) => {
  const isDark = useDarkContext();
  return (
    <>
      <div className={cn(styles.ContactHero, isDark && styles.isDark)}>
        <ResponsiveMedia ratio={9 / 18}>
          <div className={styles.Overlay} />
          <Media media={image} />
        </ResponsiveMedia>
        <Container size="wide" gutter center className={styles.Content}>
          <div className={styles.TitleWrapper}>
            <Type size="displayHero" as="h2" className={styles.Title}>
              {title}
            </Type>
            <Type size="subtitle" as="p" className={styles.Subtitle}>
              {subtitle}
            </Type>
          </div>
          <ContactBox {...contactInfo} />
        </Container>
      </div>
      <Container size="wide" gutter center className={styles.MobileContact}>
        <ContactBox mobile {...contactInfo} />
      </Container>
    </>
  );
};

const ContactBox = ({ description, phone, email, address, pdf }) => {
  const isDark = useDarkContext();
  return (
    <div className={cn(styles.Contact, isDark && styles.isDark)}>
      <Type size="displayMedium" as="h3" className={styles.ContactTitle}>
        Get in touch
      </Type>
      <Type size="base" as="p" className={styles.ContactDescription}>
        {description}
      </Type>
      <div className={styles.Contacts}>
        <ContactItem icon="phone" title={phone} href={`tel:${phone}`} />
        <ContactItem
          icon="location"
          title={address}
          href={`https://maps.google.com/?q=${address}`}
        />
        <ContactItem icon="email" title={email} href={`mailto:${email}`} />
      </div>
      <div className={styles.ContactButtons}>
        <SmartLink href={pdf} target="_blank">
          <ButtonStandard>
            <Type size="base" demi>
              Apply
            </Type>
          </ButtonStandard>
        </SmartLink>
        <SmartLink href={pdf} target="_blank">
          <ButtonStandard>
            <Type size="base" demi>
              Download PDF
            </Type>
          </ButtonStandard>
        </SmartLink>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, href }) => {
  const isDark = useDarkContext();
  return (
    <SmartLink
      href={href}
      className={cn(styles.ContactItem, isDark && styles.isDark)}
      vAlign="middle"
    >
      <Icon
        className={styles.Icon}
        type={icon}
        height={25}
        width={22}
        a11yText={icon}
      />
      <Type className={styles.LitItemTitle} as="p" size="base">
        {title}
      </Type>
    </SmartLink>
  );
};

ContactHero.propTypes = {};

export default ContactHero;
