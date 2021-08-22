import PropTypes from "prop-types";

const CurrencyFormatter = ({
  amount = 0,
  symbol = "MY,MYR",
  defaultLanguage = "en",
  minDigits = 2,
}) => {
  // Same as formatPrice except it prepends the passed currency symbol
  // When price is less than 20,000 show full, otherwise abbreviate
  const formatAmountWithCurrencySymbol = () => {
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
    if (+amount > 10000) {
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

  return formatAmountWithCurrencySymbol();
};

CurrencyFormatter.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  symbol: PropTypes.string,
  defaultLanguage: PropTypes.string,
  minDigits: PropTypes.number,
};

export default CurrencyFormatter;
