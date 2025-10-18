import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";
import { Badge } from "./Badge";

export default declareComponent(Badge, {
  name: "Badge",
  description: "A simple badge component",
  group: "Info",
  props: {
    text: props.Text({
      name: "Text",
      defaultValue: "Hello",
    }),
    variant: props.Variant({
      name: "Variant",
      defaultValue: "light",
      options: ["dark", "light"],
    }),
  },
});
