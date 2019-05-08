// 定义 State 结构类型
export const enum VisibleFilters{
    SHOW_ALL="SHOW_ALL",
    SHOW_COMPLETED="SHOW_COMPLETED",
    SHOW_ACTIVE="SHOW_ACTIVE"
}

export class TODO{
    public text:string;
    public id:number;
    public status:boolean
}


export interface IStoreState {
    dataList:TODO[];
    visibilityFilter:VisibleFilters
}