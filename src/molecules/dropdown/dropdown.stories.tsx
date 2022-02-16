import { useState } from "react";
import { Dropdown } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.molecules("Dropdown"),
  component: Dropdown,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ width: 100 }}>
      <Dropdown
        open={open}
        renderDropdown={() => (
          <div
            style={{ width: 100, height: 100, backgroundColor: "red" }}
          ></div>
        )}
      >
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{ width: 100, height: 100, backgroundColor: "blue" }}
        >
          <p>hover</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default storyConfig;
