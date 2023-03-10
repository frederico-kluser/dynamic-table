import { Order } from './types';

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
};

export function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export const stableSort = <T>(array: readonly T[], comparator: (a: T, b: T) => number) => {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
};

export const makeHeadCells = (data: any) => {
	const result = Object.keys(data[0]).map((property) => {
		if (property !== 'createdAt') {
			return {
				id: property,
				numeric: !isNaN(data[0][property]),
				disablePadding: false,
				label: property,
			};
		}
	});

	console.log('makeHeadCells :', result);

	return result;
};

export const getFormattedData = (data: any) =>
	data.map((item: any) => {
		const newItem: any = {};
		Object.keys(item).forEach((property) => {
			if (!isNaN(item[property])) {
				newItem[property] = parseInt(item[property]);
			} else {
				newItem[property] = item[property];
			}
		});

		return newItem;
	});
