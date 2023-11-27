import { LabelButton } from ".";

export default {
  title: "Components/LabelButton",
  component: LabelButton,
  argTypes: {
    prop: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "two",
    className: {},
  },
};
