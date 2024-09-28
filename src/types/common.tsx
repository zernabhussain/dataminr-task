export type ItemType = {
    id: number;
    title: string;
    component?: any;
    children?: ItemType[];
};
