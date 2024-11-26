import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchRequestFindChartClassroomBff, useFetchRequestFindMigrationProject, useFetchRequestFindOneClassroomBff, useFetchRequestFindStamps } from "../service/query";
import { ChartType, ClassroomOne, DistributeStamps, MigrateMeuBen, ProjectsTsArray, StampsType, UpdateClassroom } from "../service/type";
import { OneClassroomController } from "../service/controller";
import { ClassroomMembers } from "../../membersClassroom/context/types";
import { useFetchRequestMembersClassroom } from "../../membersClassroom/service/query";

export const OneClassroomState = () => {
    const { id } = useParams()
    const [classroomOne, setClassroomOne] = useState<ClassroomOne | undefined>()
    const [classroomChart, setClassroomChart] = useState<ChartType | undefined>()
    const [stamps, setStamps] = useState<StampsType[] | undefined>()
    const [projectMigration, setProjectMigration] = useState<ProjectsTsArray | undefined>()

    const { PutClassroomMutation, DistributeStampsMutation, MigrationMeuBenMutation } = OneClassroomController()


    const { data: classroomOneRequest, isLoading, isError } = useFetchRequestFindOneClassroomBff(id!);
    const { data: classroomChartRequest } = useFetchRequestFindChartClassroomBff(id!);

    const { data: projectMigrationRequest } = useFetchRequestFindMigrationProject()

    const { data: stampsRequest } = useFetchRequestFindStamps();

    const [classroomMembersList, setClassroomList] = useState<ClassroomMembers | undefined>()


    const { data: classroomRequest } = useFetchRequestMembersClassroom(id!);


    // const {  } = MembersClassroomController();


    useEffect(() => {
        if (classroomRequest) {
            setClassroomList(classroomRequest)
        }
    }, [classroomRequest])

    useEffect(() => {
        if (stampsRequest) {
            setStamps(stampsRequest)
        }
    }, [stampsRequest])

    useEffect(() => {
        if (projectMigrationRequest) {
            setProjectMigration(projectMigrationRequest)
        }
    }, [projectMigrationRequest])



    const UpdateClassroom = (id: string, body: UpdateClassroom) => {
        PutClassroomMutation.mutate({ data: body, id: id })
    }


    useEffect(() => {
        if (classroomOneRequest) {
            setClassroomOne(classroomOneRequest)
        }

        if (classroomChartRequest) {
            setClassroomChart(classroomChartRequest)
        }
    }, [classroomOneRequest, classroomChartRequest])

    const handleDistributeStamps = (body: DistributeStamps) => {
        DistributeStampsMutation.mutate(body)
    }

    const handleMigrateMeuben = (body: MigrateMeuBen) => {
        MigrationMeuBenMutation.mutate({ data: body })
    }


    return { handleMigrateMeuben,classroomOne, isLoading, isError, UpdateClassroom, classroomChart, stamps, classroomMembersList, handleDistributeStamps, projectMigration }
}