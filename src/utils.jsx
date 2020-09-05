export const formatCurrency = (num) => (
	' ' + Number(num.toFixed(1)).toLocaleString() + ' руб'
);

export const writeCorrect = (num, titles) => {
	if ([11,12,13,14].includes(num)) return titles[2];
	const key = (num+'').slice(-1);
	if (key === '1') return titles[0];
	if (['2','3','4'].includes(key)) return titles[1];
	return titles[2];
};

export const mediaShow = {
	xs: 'd-block d-sm-none',
	sm: 'd-none d-sm-block d-md-none',
	md: 'd-none d-md-block d-lg-none',
	lg: 'd-none d-lg-block d-xl-none',
	xl: 'd-none d-xl-block',
	mdUp: 'd-none d-md-block',
	lgDown: 'd-block d-xl-none',
	smDown: 'd-sm-block d-md-none',
};