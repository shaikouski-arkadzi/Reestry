import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    status: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "hover",
    className: {},
    divClassName: {},
    text: "Вход",
  },
};
