export interface NavbarProps {
    data?: Array<{ href?: string, name?: string }>;
    onChangeDimension?:any;
    windowDimension?:number;
    isOpened?:boolean;
    onPress?:any;
}

export interface HomeProps{
    title?:string;
    subtitle?:string;
    buttonText?:string
}

export interface HealthCareProps{
    title?:string;
    subtitle?:string;
    buttonText?:string;
    leftSideTitle?:string;
    rightSideTitle?:string;
    leftSidedescription?:string;
    rightSidedescription?:string;
}

export interface ReviewItemProps{
    icon?:string;
    quantity?:string;
    text?:string
}
export interface ContactProps{
    apikey:string,
    onClickMap:(lat:number,lng:number)=>void,
    onSubmit?:()=>void,
    setFullName?:any;
    setEmail?:any;
    setMessage?:any;
    windowWidth:number;
}