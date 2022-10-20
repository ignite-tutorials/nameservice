import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSetName } from "./types/nameservice/tx";
import { MsgDeleteName } from "./types/nameservice/tx";
import { MsgBuyName } from "./types/nameservice/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/nameservice.nameservice.MsgSetName", MsgSetName],
    ["/nameservice.nameservice.MsgDeleteName", MsgDeleteName],
    ["/nameservice.nameservice.MsgBuyName", MsgBuyName],
    
];

export { msgTypes }