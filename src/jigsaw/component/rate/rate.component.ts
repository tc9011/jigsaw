import {Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractJigsawComponent} from "../common";

@Component({
    selector: 'jigsaw-rate',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => JigsawRateComponent),
            multi: true
        }
    ],
})
export class JigsawRateComponent extends AbstractJigsawComponent implements OnInit,  ControlValueAccessor{
    _prefixCls = 'ant-rate';
    _innerPrefixCls = `${this._prefixCls}-star`;
    _classMap;
    _starArray: Array<any> = new Array();
    _count = 5;
    _value = 0;
    _hoverValue = 0; // 鼠标悬浮时的星数，为正整数，和_hasHalf配合使用
    _hasHalf = false;
    _allowHalf = false;
    _disabled = false;
    _floatReg: any = /^\d+(\.\d+)?$/;

    // ngModel Access
    onChange: any = Function.prototype;
    onTouched: any = Function.prototype;

    @Input()
    set nzCount(value: number) {
        this._count = value;
    }

    @Input()
    set nzAllowHalf(value: boolean | string) {
        if (value === '') {
            this._allowHalf = true;
        } else {
            this._allowHalf = value as boolean;
        }
    }

    @Input()
    set nzDefaultValue(value: number) {
        this._value = value;
        if (this._floatReg.test(value)) {
            value += 0.5;
            this._hasHalf = true;
        }
        this._hoverValue = value;
    }

    get nzValue(): number {
        return this._value;
    };

    set nzValue(value: number) {
        if (this._value === value) {
            return;
        }
        this._value = value;
        if (this._floatReg.test(value)) {
            value += 0.5;
            this._hasHalf = true;
        }
        this._hoverValue = value;
    }

    @Input()
    set nzDisabled(value: boolean) {
        this._disabled = value;
        this.setClassMap();
    }

    setClassMap(): void {
        this._classMap = {
            [this._prefixCls]              : true,
            [`${this._prefixCls}-disabled`]: this._disabled
        };
    }

    setChildrenClassMap(): void {
        let index = 0;
        while (index < this._count) {
            this._starArray.push(index++);
        }
    }

    _clickRate(e, index, isFull): void {
        e.stopPropagation();
        if (this._disabled) {
            return;
        }
        this._hoverValue = this._value = index + 1;
        this._hasHalf = !isFull && this._allowHalf;
        if (this._hasHalf) {
            this._value -= 0.5;
        }
        this.onChange(this._value);
    }

    _hoverRate(e, index, isFull): void {
        e.stopPropagation();
        if (this._disabled) {
            return;
        }
        const isHalf: boolean = !isFull && this._allowHalf;
        // 如果星数一致，则不作操作，用于提高性能
        if (this._hoverValue === index + 1 && isHalf === this._hasHalf) {
            return;
        }

        this._hoverValue = index + 1;
        this._hasHalf = isHalf;
    }

    _leaveRate(e): void {
        e.stopPropagation();
        let oldVal = this._value;
        if (this._floatReg.test(oldVal)) {
            oldVal += 0.5;
            this._hasHalf = true;
        }
        this._hoverValue = oldVal;
    }

    setClasses(i): any {
        return {
            [this._innerPrefixCls]            : true,
            [`${this._innerPrefixCls}-full`]  : (i + 1 < this._hoverValue) || (!this._hasHalf) && (i + 1 === this._hoverValue),
            [`${this._innerPrefixCls}-half`]  : (this._hasHalf) && (i + 1 === this._hoverValue),
            [`${this._innerPrefixCls}-active`]: (this._hasHalf) && (i + 1 === this._hoverValue),
            [`${this._innerPrefixCls}-zero`]  : (i + 1 > this._hoverValue)
        };
    }

    writeValue(value: any): void {
        this.nzValue = value;
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.nzDisabled = isDisabled;
    }

    ngOnInit() {
        this.setClassMap();
        this.setChildrenClassMap();
    }
}
