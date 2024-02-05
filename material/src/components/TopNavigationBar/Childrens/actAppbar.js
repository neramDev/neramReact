import React from "react";
import {
  SolidButton,
  OutlineButton,
  HighlightButton,
} from "../../Basic components/Button";

function ActAppBar() {
  return (
    <div className="my-auto">
      <OutlineButton className="rounded-pill">Join Class</OutlineButton>
      <HighlightButton>Custom</HighlightButton>
    </div>
  );
}

export default ActAppBar;
