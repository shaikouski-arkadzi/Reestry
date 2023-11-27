import { Account } from ".";

export default {
  title: "Components/Account",
  component: Account,
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
    imgClassName: {},
    text: "",
  },
};
