export interface NavbarProps {
    data?: Array<{ href?: string, name?: string }>
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