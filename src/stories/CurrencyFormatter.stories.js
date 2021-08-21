import CurrencyFormatter from "../components";

export default {
  title: "CurrencyFormatter",
  component: CurrencyFormatter,
};

const Template = (args) => <CurrencyFormatter {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: 0,
  symbol: "MY,MYR",
  defaultLanguage: "en",
  minDigits: 2,
};
