import { Notifications } from ".";

export default {
  title: "Components/Notifications",
  component: Notifications,
  argTypes: {
    prop: {
      options: ["two", "one"],
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
