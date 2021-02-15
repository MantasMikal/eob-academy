import React, { useState } from "react";
import { array, string } from "prop-types";
import { cn } from "lib/helpers";
import { useDarkContext } from "Context/DarkContext";

import Container from "Primitive/Container";
import Type from "Primitive/Type";
import TextControl from "Primitive/TextControl";
import FieldTemplate from "Primitive/FieldTemplate";
import SelectControl from "Primitive/SelectControl";
import VisuallyHidden from "Primitive/VisuallyHidden";
import ButtonStandard from "Primitive/ButtonStandard";
import BlockContent from "../../block-content";

import styles from "./ApplySection.module.scss";

const courses = [
  "Click to pick a course",
  "Online",
  "College",
  "Alternative Provision",
];

const venues = [
  "Click to pick area of interest",
  "Online",
  "Bracknell",
  "Letchworth",
];

const Index = ({ title, blocks }) => {
  const isDark = useDarkContext();
  const [selectedVenue, setVenue] = useState(venues[0]);

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

        <div className={styles.AreaOfInterest}>
          <FieldTemplate
            template="multiText"
            label="Area of Interest"
            required
            controlName="areaOfInterest"
          >
            <label>
              <VisuallyHidden>Area of interest</VisuallyHidden>
              <SelectControl
                name="areaOfInterest"
                onChange={(e) => setVenue(e.target.value)}
              >
                {venues.map((venue) => (
                  <option value={venue} key={`venue${venue}`}>
                    {venue}
                  </option>
                ))}
              </SelectControl>
            </label>
          </FieldTemplate>
        </div>

        {venues.slice(1, venues.length).map((venue) => {
          return (
            <form
              className={cn(
                styles.Form,
                selectedVenue === venue && styles.visible
              )}
              name={`contact-${venue}`}
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value={`contact-${venue}`}
              />
              <FieldTemplate
                template="multiText"
                label="Course of interest"
                required
                controlName="courseOfInterest"
              >
                <label>
                  <VisuallyHidden>Course of interest</VisuallyHidden>
                  <SelectControl name="courseOfInterest">
                    {courses.map((course) => (
                      <option value={course} key={`course${course}`}>
                        {course}
                      </option>
                    ))}
                  </SelectControl>
                </label>
              </FieldTemplate>
              <FieldTemplate label="Name" required controlName="name">
                <TextControl name="name" type="text" required />
              </FieldTemplate>
              <FieldTemplate label="Email" required controlName="email">
                <TextControl name="email" type="email" required />
              </FieldTemplate>
              <FieldTemplate label="Phone number" controlName="phone">
                <TextControl name="phone" type="tel" />
              </FieldTemplate>
              <FieldTemplate
                label="Message"
                status="success"
                required
                controlName="message"
              >
                <TextControl
                  name="message"
                  placeholder="Hi!"
                  multiLine
                  rows={10}
                  required
                />
              </FieldTemplate>
              <ButtonStandard className={styles.ApplyButton} type="submit">
                <Type size="base" demi>
                  Apply
                </Type>
              </ButtonStandard>
            </form>
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
