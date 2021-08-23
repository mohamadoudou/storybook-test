// When price is less than 20,000 show full, otherwise abbreviate
export const formatAmountWithCurrencySymbol = (
  amount = 0,
  symbol = "MY,MYR",
  defaultLanguage = "en",
  minDigits = 2
) => {
  const [countryIsoCode, currencyCode] = (String(symbol) || "MY,MYR").split(
    ","
  );
  let options = {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
    minimumFractionDigits: minDigits,
    maximumFractionDigits: 2,
  };
  if (+amount > 20000) {
    options = {
      ...options,
      notation: "compact",
      compactDisplay: "short",
    };
  }
  return new Intl.NumberFormat(
    `${defaultLanguage}-${countryIsoCode}`,
    options
  ).format(amount);
};
