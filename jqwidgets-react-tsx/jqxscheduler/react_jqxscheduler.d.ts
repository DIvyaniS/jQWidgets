import * as React from 'react';
declare class JqxScheduler extends React.PureComponent<ISchedulerProps, IState> {
    protected static defaultProps: ISchedulerProps;
    protected static getDerivedStateFromProps(props: ISchedulerProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: ISchedulerProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: ISchedulerProps): void;
    setOptions(options: ISchedulerProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    addAppointment(item: ISchedulerAppointmentDataFields): void;
    beginAppointmentsUpdate(): void;
    clearAppointmentsSelection(): void;
    clearSelection(): void;
    closeMenu(): void;
    closeDialog(): void;
    deleteAppointment(appointmenId: string): void;
    destroy(): void;
    endAppointmentsUpdate(): void;
    ensureAppointmentVisible(id: string): void;
    ensureVisible(item: any, resourceId: string): void;
    exportData(format: string): any;
    focus(): void;
    getAppointmentProperty(appointmentId: string, name: string): any;
    getSelection(): ISchedulerGetSelection;
    getAppointments(): ISchedulerAppointmentDataFields[];
    getDataAppointments(): any[];
    hideAppointmentsByResource(resourcesId: string): void;
    openMenu(left: number, top: number): void;
    openDialog(left: number, top: number): void;
    selectAppointment(appointmentId: string): void;
    setAppointmentProperty(appointmentId: string, name: string, value: any): void;
    selectCell(date: any, allday: boolean, resourceId: string): void;
    showAppointmentsByResource(resourceId: string): void;
    scrollWidth(): number;
    scrollHeight(): number;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxScheduler;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface ISchedulerAppointmentDataFields {
    allDay?: boolean;
    background?: string;
    borderColor?: string;
    color?: string;
    description?: string;
    draggable?: boolean;
    from?: string;
    hidden?: boolean;
    id?: number | string;
    location?: string;
    recurrencePattern?: ISchedulerRecurrencePattern;
    recurrenceException?: string;
    resizable?: boolean;
    resourceId?: number | string;
    readOnly?: boolean;
    subject?: string;
    style?: string;
    status?: string;
    to?: string;
    tooltip?: string;
    timeZone?: string;
}
interface ISchedulerRecurrencePattern {
    FREQ?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    COUNT?: number;
    UNTIL?: string;
    BYDAY?: string;
    BYMONTHDAY?: string;
    BYMONTH?: number;
    INTERVAL?: number;
}
interface ISchedulerChangedAppointments {
    type?: 'Update' | 'Delete' | 'Add';
    appointment?: ISchedulerAppointmentDataFields;
}
interface ISchedulerContextMenuOpen {
    menu?: any;
    appointment?: any;
    event?: any;
}
interface ISchedulerContextMenuClose {
    menu?: any;
    appointment?: any;
    event?: any;
}
interface ISchedulerContextMenuItemClick {
    menu?: any;
    appointment?: any;
    event?: any;
}
interface ISchedulerContextMenuCreate {
    menu?: any;
    settings?: any;
}
interface ISchedulerEditDialogCreate {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}
interface ISchedulerEditDialogOpen {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}
interface ISchedulerEditDialogClose {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}
interface ISchedulerEditDialogKeyDown {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
    event?: any;
}
interface ISchedulerExportSettings {
    serverURL?: string;
    characterSet?: string;
    fileName?: string;
    dateTimeFormatString?: string;
    resourcesInMultipleICSFiles?: boolean;
}
interface ISchedulerRenderAppointment {
    data?: any;
}
interface ISchedulerResources {
    source?: string;
    colorScheme?: string;
    orientation?: 'none' | 'horizontal' | 'vertical';
    dataField?: string;
    resourceColumnWidth?: number;
    resourceRowHeight?: number;
}
interface ISchedulerStatuses {
    free?: string;
    tentative?: string;
    busy?: string;
    doNotDisturb?: string;
    outOfOffice?: string;
}
interface ISchedulerGetSelection {
    from?: any;
    to?: any;
    ResourceId?: any;
}
interface ISchedulerOptions {
    appointmentOpacity?: number;
    appointmentsMinHeight?: number;
    appointmentDataFields?: ISchedulerAppointmentDataFields;
    appointmentTooltips?: boolean;
    columnsHeight?: number;
    contextMenu?: boolean;
    contextMenuOpen?: (menu: ISchedulerContextMenuOpen['menu'], appointment: ISchedulerContextMenuOpen['appointment'], event: ISchedulerContextMenuOpen['event']) => void;
    contextMenuClose?: (menu: ISchedulerContextMenuClose['menu'], appointment: ISchedulerContextMenuClose['appointment'], event: ISchedulerContextMenuClose['event']) => void;
    contextMenuItemClick?: (menu: ISchedulerContextMenuItemClick['menu'], appointment: ISchedulerContextMenuItemClick['appointment'], event: ISchedulerContextMenuItemClick['event']) => boolean;
    contextMenuCreate?: (menu: ISchedulerContextMenuCreate['menu'], settings: ISchedulerContextMenuCreate['settings']) => void;
    changedAppointments?: ISchedulerChangedAppointments[];
    disabled?: boolean;
    date?: any;
    dayNameFormat?: string;
    enableHover?: boolean;
    editDialog?: boolean;
    editDialogDateTimeFormatString?: string;
    editDialogDateFormatString?: string;
    editDialogOpen?: (dialog?: ISchedulerEditDialogOpen['dialog'], fields?: ISchedulerEditDialogOpen['fields'], editAppointment?: ISchedulerEditDialogOpen['editAppointment']) => void;
    editDialogCreate?: (dialog?: ISchedulerEditDialogCreate['dialog'], fields?: ISchedulerEditDialogCreate['fields'], editAppointment?: ISchedulerEditDialogCreate['editAppointment']) => void;
    editDialogKeyDown?: (dialog?: ISchedulerEditDialogKeyDown['dialog'], fields?: ISchedulerEditDialogKeyDown['fields'], editAppointment?: ISchedulerEditDialogKeyDown['editAppointment'], event?: ISchedulerEditDialogKeyDown['event']) => boolean;
    editDialogClose?: (dialog?: ISchedulerEditDialogClose['dialog'], fields?: ISchedulerEditDialogClose['fields'], editAppointment?: ISchedulerEditDialogClose['editAppointment']) => void;
    exportSettings?: ISchedulerExportSettings;
    height?: number | string;
    legendPosition?: string;
    legendHeight?: number;
    localization?: any;
    min?: any;
    max?: any;
    ready?: () => void;
    renderAppointment?: (data: ISchedulerRenderAppointment['data']) => any;
    rendering?: () => void;
    rendered?: () => void;
    rtl?: boolean;
    resources?: ISchedulerResources;
    rowsHeight?: number;
    showToolbar?: boolean;
    showLegend?: boolean;
    scrollBarSize?: number;
    source?: any;
    statuses?: ISchedulerStatuses;
    touchRowsHeight?: number;
    theme?: string;
    touchAppointmentsMinHeight?: number;
    touchScrollBarSize?: number;
    timeZone?: string;
    touchDayNameFormat?: 'shortest' | 'firstTwoLetters' | 'firstLetter' | 'abbr' | 'full';
    toolBarRangeFormat?: string;
    toolBarRangeFormatAbbr?: string;
    toolbarHeight?: number;
    views?: any[];
    view?: 'dayView' | 'weekView' | 'monthView' | 'timelineDayView' | 'timelineWeekView' | 'timelineMonthView';
    width?: number | string;
}
export interface ISchedulerProps extends ISchedulerOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onAppointmentChange?: (e?: Event) => void;
    onAppointmentClick?: (e?: Event) => void;
    onAppointmentDoubleClick?: (e?: Event) => void;
    onAppointmentDelete?: (e?: Event) => void;
    onAppointmentAdd?: (e?: Event) => void;
    onBindingComplete?: (e?: Event) => void;
    onCellClick?: (e?: Event) => void;
    onCellDoubleClick?: (e?: Event) => void;
    onContextMenuOpen?: (e?: Event) => void;
    onContextMenuClose?: (e?: Event) => void;
    onContextMenuItemClick?: (e?: Event) => void;
    onContextMenuCreate?: (e?: Event) => void;
    onDateChange?: (e?: Event) => void;
    onEditRecurrenceDialogOpen?: (e?: Event) => void;
    onEditRecurrenceDialogClose?: (e?: Event) => void;
    onEditDialogCreate?: (e?: Event) => void;
    onEditDialogOpen?: (e?: Event) => void;
    onEditDialogClose?: (e?: Event) => void;
    onViewChange?: (e?: Event) => void;
}
