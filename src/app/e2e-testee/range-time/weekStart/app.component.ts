import {
    AfterContentInit, ChangeDetectorRef, Component, Renderer2, ViewContainerRef
} from "@angular/core";


@Component({
    templateUrl: './app.component.html',
    styles: [`
        h4{font-size: 20px;margin-bottom: 20px;}
        h5{font-size: 16px;margin-bottom: 10px}
        p{font-size: 14px;margin: 10px 0 20px 0}
    `]
})
export class RangeTimeWeekStartComponent implements AfterContentInit{
    beginDate = "now-1d";

    endDate = "now";

    datas = [{label:"sun"},{label:"mon"},{label:"tue"},
        {label:"wed"},{label:"thu"},{label:"fri"},{label:"sat"}];

    weekStart

    constructor(public viewContainerRef: ViewContainerRef,
                public renderer: Renderer2, public changeDetectorRef: ChangeDetectorRef) {
    }

    ngAfterContentInit() {
        this.weekStart= [this.datas[0]];
        this.changeDetectorRef.detectChanges();
    }
}

