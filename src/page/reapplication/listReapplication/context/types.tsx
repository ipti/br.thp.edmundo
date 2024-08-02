import { ReapplicationList } from "../service/types";

export interface ListReapplicationContextType {
    reapplicationList: ReapplicationList | undefined;
    isLoading: boolean;
    isError: boolean;
}