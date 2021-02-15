import React from "react";
import { node, boolean } from "prop-types";

import styles from "./SplitPanel.module.scss";
import { cn } from "lib/helpers";

const SplitPanel = ({ children, reverse }) => (
  <div className={cn(styles.SplitPanel, reverse && styles.reverse)}>
    <div className={styles.Left}>{children[0]}</div>
    <div className={styles.Right}>{children[1] && children[1]}</div>
  </div>
);

SplitPanel.propTypes = {
  children: node.isRequired,
  reverse: boolean,
};

export default SplitPanel;
