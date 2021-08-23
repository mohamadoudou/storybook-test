import PropTypes from "prop-types";
import { formatAmountWithCurrencySymbol } from "../../utils/string-hepers";

const CurrencyFormatter = ({
  amount = 0,
  symbol = "MY,MYR",
  defaultLanguage = "en",
  minDigits = 2,
}) => {
  return formatAmountWithCurrencySymbol(
    amount,
    symbol,
    defaultLanguage,
    minDigits
  );
};

CurrencyFormatter.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  symbol: PropTypes.string,
  defaultLanguage: PropTypes.string,
  minDigits: PropTypes.number,
};

export default CurrencyFormatter;
