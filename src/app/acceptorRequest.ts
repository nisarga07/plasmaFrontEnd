export class AcceptorRequest{
    id!:string
    username!: string;
    patientName!:string;
    patientAge!:string;
    reason!:string;
    bloodGroup!:string;
    units!:number;
    status!:string;
    fileName!:string;
constructor(
    id:string,
    username:string,
    patientName:string,
    patientAge:string,
    reason:string,
    bloodGroup:string,
    units:number,
    status:string,
    fileName:string
){}
}