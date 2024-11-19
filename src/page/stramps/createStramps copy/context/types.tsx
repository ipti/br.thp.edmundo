import { Dispatch, SetStateAction } from "react"

export interface StampsContextTypes {
    UpdateStamps: (body: any) => void
    setFile: Dispatch<SetStateAction<File[] | undefined>>
    file: File[] | undefined
    StampsOne: any
    isLoading: boolean
}
