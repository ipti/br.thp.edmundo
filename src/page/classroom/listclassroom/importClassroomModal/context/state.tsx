import { useState } from "react"
import { useFetchRequestFindMigrationClassroomList, useFetchRequestFindMigrationProject } from "../service/query"
import { ClassroomList, TsListType } from "./type"
import { ListClassroomController } from "../service/controller"

export const ImportClassroomState = () => {
    const [projectId, setProjectId] = useState<any>()
    const { data: migrationClassroomRequest, isLoading: isLoadingClassroom} = useFetchRequestFindMigrationClassroomList(projectId)
    const {data: migrationtsrequest} = useFetchRequestFindMigrationProject()
    var migrationTs: TsListType | undefined = migrationtsrequest
    var classroomList: ClassroomList | undefined = migrationClassroomRequest


    const {MigrateClassroomMutation} = ListClassroomController()

    const handleMigrateClassroom = (idClassroom: number) => {
        MigrateClassroomMutation.mutate({idClassroom: idClassroom})
    }
    const initialState: any = {
        ts: undefined, project: undefined, classroom: undefined
    }

    return{migrationTs, initialState, projectId, setProjectId, classroomList, handleMigrateClassroom, isLoadingClassroom}
}