import { CareRecord } from "../../../../types";
import ResponseDto from "../response.dto";

// interface: get care record list response dto //
export default interface GetCareRecordResponseDto extends ResponseDto{
    careRecords: CareRecord[];
}