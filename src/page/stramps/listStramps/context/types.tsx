import { Stamps } from "../service/type";

export interface ListStampsContextType {
    stamps: Stamps[] | undefined;
    isLoading: boolean;
    isError: boolean;
    DeleteStamps: (id: number) => void;
}