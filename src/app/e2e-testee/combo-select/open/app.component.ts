import {Component, Renderer2, ViewContainerRef} from '@angular/core';
import {ArrayCollection} from "jigsaw/core/data/array-collection";
@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class OpenComboSelectDemo {
    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2) {
    }
    
    public open: boolean = true;
    public autoClose: boolean = true;

    public toggleOpen() {
        this.open = !this.open
    }

    public toggleAutoClose() {
        this.autoClose = !this.autoClose
    }

    public selectedCity = new ArrayCollection([{label: "北京", closable: false}]);
    public citys = [
        {label: "北京", closable: false},
        {label: "上海", closable: false},
        {label: "南京"},
        {label: "深圳"},
        {label: "长沙"},
        {label: "西安"},
        {label: "盐城"},
        {label: "徐州"},
        {label: "连云港"},
        {label: "连云港1"},
        {label: "连云港2"},
        {label: "连云港3"},
        {label: "哈尔滨"}
    ];

}
