import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuData} from "../../../jigsaw/component/menu/menu.typings";

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class MenuFullComponent implements OnInit {
    @ViewChild('jMenu') jMenu: any;
    _selectedItem = [];
    displayItem = [];
    _selectedItem1 = [];
    displayItem1 = [];

    titles = [
        {
            label: 'Settings',
            extraLabel: 'Ctrl+Alt+A',
            icon: 'fa fa-address-book',
        },
        {
            label: 'Print',
            extraLabel: '',
            icon: 'fa fa-address-book',
            children: [
                {
                    label: 'Settings',
                    extraLabel: 'Ctrl+Alt+A',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Print',
                    extraLabel: '',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Save All',
                    extraLabel: 'Ctrl+S',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Exit',
                    extraLabel: '',
                    icon: 'fa fa-address-book'
                }
            ]
        },
        {
            label: 'Save All',
            extraLabel: 'Ctrl+S',
            icon: 'fa fa-address-book'
        },
        {
            label: 'Exit',
            extraLabel: '',
            icon: 'fa fa-address-book',
            children: [
                {
                    label: 'Settings',
                    extraLabel: 'Ctrl+Alt+A',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Print',
                    extraLabel: '',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Save All',
                    extraLabel: 'Ctrl+S',
                    icon: 'fa fa-address-book'
                },
                {
                    label: 'Exit',
                    extraLabel: '',
                    icon: 'fa fa-address-book'
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {

    }

    showSelectedMenu() {
        this.jMenu.show(this.titles, {
                posType: 'absolute',
                posOffset: {
                    right: '150px',
                    top: '153px',
                }
            }
        );
    }

    hideSelectedMenu() {
        this.jMenu.show();
    }

    selectChange(selected) {
        this._selectedItem.push(selected.map(selected => selected.label).toString());
    }

    selectChange1(selected) {
        this._selectedItem1.push(selected.map(selected => selected.label).toString());
    }

    clearArray() {
        this.displayItem = this._selectedItem[0];
        this._selectedItem = [];
    }

    clearArray1() {
        this.displayItem1 = this._selectedItem1[0];
        this._selectedItem1 = [];
    }
}
