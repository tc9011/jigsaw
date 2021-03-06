/**
 * Created by 10177553 on 2017/3/29.
 */
import {
    Component, OnInit, Renderer2, ViewContainerRef
} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TableData} from "jigsaw/core/data/table-data";

@Component({
    templateUrl:"./app.component.html"
})
export class JigsawTabsWithInputComponent implements OnInit {

    selectedIndex = 0;

    tableData: TableData;

    tabDatas = [{title:"111",key:"XXX",content:"content 111"},{title:"222",key:"YYY",content:"content 222"}];

    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2, http: HttpClient) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/hr-list');
        this.tableData.onAjaxComplete(() => {
            console.log(this.tableData);
        });

        this.tabDatas.forEach(tabData =>{
            this[tabData.key] = new TableData();
            this[tabData.key].http = http;
        })
    }

    getTableData(){
        this.tabDatas.forEach(tabData =>{
            console.log(this[tabData.key]);
            this[tabData.key].fromAjax('mock-data/hr-list');
        });
    }

    ngOnInit() { }

}
