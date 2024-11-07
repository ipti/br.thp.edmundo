import { Dispatch, SetStateAction } from "react"

export interface StampsContextTypes {
    CreateStamps: (body: any) => void
    setFile: Dispatch<SetStateAction<File[] | undefined>>
    file: File[] | undefined
}
