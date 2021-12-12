export class DonorRequest{
    id!:string;
    username!: string;
    patientName!:string;
    patientAge!:string;
    reason!:string;
    bloodGroup!:string;
    units!:number;
    status!:string;
    
constructor(
    id:string,
    username:string,
    patientName:string,
    patientAge:string,
    reason:string,
    bloodGroup:string,
    units:number ,
    status:string 
){}
}