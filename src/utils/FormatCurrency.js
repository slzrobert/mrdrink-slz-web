const FormatCurrency = (value, currency) => {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: currency ? currency : 'BRL'});
}

export default FormatCurrency;
