export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof any) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: any;
	data: any;
}

export interface EnhancedTableToolbarProps {
	numSelected: number;
	setAddItem?: any;
	setDeleteItem?: any;
}
