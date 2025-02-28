import { useFetchRequestFindMigrationProject } from "../service/query"
import { TsListType } from "./type"

export const ImportClassroomState = () => {
    const {data: migrationtsrequest} = useFetchRequestFindMigrationProject()
    var migrationTs: TsListType | undefined = migrationtsrequest

    const initialState: any = {
        ts: undefined, project: undefined,
    }


    return{migrationTs, initialState}
}