import { useState } from "react";
import { CollapsableView } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
    title: titleBuilder.molecules("CollapsableView"),
    component: CollapsableView,
  };

  export const Collapsable = () => {
      const [isExpanded, setIsExpanded] = useState(true);
      const toggle = () => setIsExpanded(!isExpanded);

      return(
      <div style={{width: "1024px"}}>
          <CollapsableView title="What is Roll Staking?" isExpanded={isExpanded} toggle={toggle} />
      </div>
      )
  }


export default storyConfig