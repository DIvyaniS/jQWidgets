/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class jqxComplexInputComponent implements ControlValueAccessor, OnChanges {
    attrDecimalNotation: any;
    attrDisabled: boolean;
    attrPlaceHolder: string;
    attrRoundedCorners: boolean;
    attrRtl: boolean;
    attrSpinButtons: boolean;
    attrSpinButtonsStep: number;
    attrTemplate: any;
    attrTheme: string;
    attrValue: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxComplexInput;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    ngValue: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    decimalNotation(arg?: string): any;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    placeHolder(arg?: string): any;
    roundedCorners(arg?: boolean): any;
    rtl(arg?: boolean): any;
    spinButtons(arg?: boolean): any;
    spinButtonsStep(arg?: number): any;
    template(arg?: string): any;
    theme(arg?: string): any;
    value(arg?: string): any;
    width(arg?: string | number): any;
    destroy(): void;
    getReal(complexnumber?: number): number;
    getImaginary(complexnumber?: number): number;
    render(): void;
    refresh(): void;
    val(value?: any): any;
    onChange: EventEmitter<{}>;
    __wireEvents__(): void;
}
