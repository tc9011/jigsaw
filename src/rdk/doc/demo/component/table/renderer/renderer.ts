import {Component, ViewEncapsulation, Type, ViewChildren, QueryList, AfterViewInit} from "@angular/core";
import {TableData} from "../../../../../core/data/table-data";
import {
    TableHead, TableCell, TableHeadSelect, TableHeadCheckbox,TableCellCheckbox, TableCellOption,
    TableHeadOption
} from "./table-renderer";
import {SortAs, SortOrder} from "../../../../../core/data/component-data";
import {ColumnSetting, AdditionalColumnSetting} from "../../../../../component/table/table-api";

@Component({
    templateUrl: 'renderer.html',
    styleUrls: ['renderer.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TableRendererDemoComponent implements AfterViewInit{
    tableData: TableData;

    constructor() {
        this.tableData = new TableData([
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111],
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111],
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111],
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111],
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111],
                [12, 12, 12, 12, 12, 111],
                [23, 23, 23, 23, 23, 111],
                [43, 43, 43, 43, 43, 111]],
            ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
    }

    private _columns: ColumnSetting[] = [
        {
            target: 'f1',
            visible: true,
            width: '20%',
            header: {
                renderer: TableHeadSelect,
                sortable: false
            },
            cell: {
                renderer: TableCell,
                class: 'green-text',
                editable: false,
                editorRenderer: null,
            },
            group: true
        },
        {
            target: 'f2',
            visible: true,
            width: '10%',
            header: {
                renderer: TableHead,
                class: 'red-text',
                sortable: true,
                sortAs: SortAs.string,
                defaultSortOrder: SortOrder.des
            },
            cell: {
                renderer: TableCell,
                class: null,
                editable: false,
                editorRenderer: null,
            },
            group: true
        },
        {
            target: 'f3',
            visible: true,
            header: {
                renderer: TableHead,
                sortable: true,
                sortAs: SortAs.number,
                defaultSortOrder: SortOrder.asc
            },
            cell: {
                renderer: TableCell,
                class: null,
                editable: false,
                editorRenderer: null,
            },
            group: true
        },
        {
            target: 'f4',
            visible: true,
            header: {
                renderer: TableHead,
                sortable: false
            },
            cell: {
                renderer: TableCell,
                class: null,
                editable: false,
                editorRenderer: null,
            },
            group: true
        },
        {
            target: 'f5',
            visible: true,
            header: {
                sortable: true,
                sortAs: SortAs.string,
                defaultSortOrder: SortOrder.default
            },
            cell: {
                renderer: TableCell,
                class: null,
                editable: false,
                editorRenderer: null,
            },
            group: true
        },
        {
            target: 5,
            visible: false,
        },
        {
            target: (field, index) => { return index > 2 },
            header:{
                class: 'big-text'
            }
        },
        {
            target: ['f1', 'f4'],
            header:{
                class: 'green-text'
            }
        }
    ];

    private _additionalColumns: AdditionalColumnSetting[] = [
        {
            pos: 0,
            width: '60px',
            header: {
                renderer: TableHeadCheckbox,
            },
            cell: {
                renderer: TableCellCheckbox
            },
            group: true
        },
        {
            pos: -1,
            width: '10%',
            header: {
                renderer: TableHeadOption,
                class: 'red-text'
            },
            cell: {
                renderer: TableCellOption
            },
            group: true
        },
        {
            pos: 2,
            width: '10%',
            header: {
                renderer: TableHeadOption,
                class: 'red-text'
            },
            cell: {
                renderer: TableCellOption
            },
            group: true
        }
    ];

    /*total = 200;

    public getCurrentPage(message:any){
        console.log("current page message is: "+message);
    }
    public getPageSize(message:any){
        console.log("page size is: "+message);
    }*/

    @ViewChildren(TableCellCheckbox) checkboxs: QueryList<TableCellCheckbox>;

    ngAfterViewInit(){
        this.checkboxs.forEach(checkbox => {
            checkbox.cellData = 1;
        })
    }
}

