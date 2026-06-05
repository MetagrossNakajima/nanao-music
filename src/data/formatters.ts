import type { Setlist } from './setlistTypes';

const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

export function formatEventDate(setlist: Pick<Setlist, 'date'>) {
	const { year, month, day } = setlist.date;
	const weekday = weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
	const label = `${month}/${day}`;
	return `${label}(${weekday})`;
}

export function formatEventYear(setlist: Pick<Setlist, 'date'>) {
	return String(setlist.date.year);
}

export function formatEventFullDate(setlist: Pick<Setlist, 'date'>) {
	const { year, month, day } = setlist.date;
	const weekday = weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
	return `${year}/${month}/${day}(${weekday})`;
}
