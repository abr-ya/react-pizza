export const formatCurrency = (num) => (
    'от ' + Number(num.toFixed(1)).toLocaleString() + ' руб.'
);
