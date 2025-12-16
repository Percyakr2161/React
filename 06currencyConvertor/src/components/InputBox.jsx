function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency,
  amountDisable = false,
}) {
  return (
    <div className="input-card">
      <div className="input-left">
        <label>{label}</label>
        <input
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
        />
      </div>

      <div className="input-right">
        <label>Currency Type</label>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
