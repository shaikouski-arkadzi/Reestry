import { FormInput } from ".";

export default {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {
    prop: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    prop: "one",
    className: {},
    textLabel: "Имя",
    divClassName: {},
    text: "Введите имя",
    divClassNameOverride: {},
  },
};
