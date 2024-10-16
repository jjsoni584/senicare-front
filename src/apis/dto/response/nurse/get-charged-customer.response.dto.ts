import { ChargedCustomer } from "../../../../types";
import ResponseDto from "../response.dto";

export default interface GetChargedCustomerResponseDto extends ResponseDto{
    customers: ChargedCustomer[];
}