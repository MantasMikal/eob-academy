import React from "react";
import createMedia from "./createMedia";
import SplitPanel from "Common/SplitPanel";

export function createSplitPanel(component) {
  console.log(
    "🚀 ~ file: createSplitPanel.jsx ~ line 6 ~ createSplitPanel ~ component",
    component
  );
  const content = component.content;

  if (!content) return <> </>;

  // Build content
  const splitPanelComponents = content.map((item) => {
    return createMedia(item);
  });
  return (
    splitPanelComponents && (
      <SplitPanel reverse={component.reverse} key={component._key}>
        {splitPanelComponents}
      </SplitPanel>
    )
  );
}
export default createSplitPanel;
