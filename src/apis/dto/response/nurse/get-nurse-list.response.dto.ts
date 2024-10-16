import { extend } from "dayjs";
import ResponseDto from "../response.dto";
import { Nurse } from "../../../../types";

// interface: get nurse list response body dto //
export default interface GetNurseListResponseDto extends ResponseDto{
    nurses: Nurse[];
}