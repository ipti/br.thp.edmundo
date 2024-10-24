import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UpdateUserController } from "../service/controller"
import { useFetchRequestFindChartUserClassroomBff, useFetchRequestFindChartUserModuleClassroomBff, useFetchRequestFindChartUserModuleMediaClassroomBff, useFetchRequestFindOneUser } from "../service/query"
import { ChartUserType, UpdateUser, User } from "../service/types"
import { useFetchRequestAllModule } from "../../modulesClassroom/service/query"
import { ModuleList } from "../../modulesClassroom/context/type"

export const UpdateUserState = () => {


    const [user, setuser] = useState<User | undefined>()
    const [file, setFile] = useState<File[] | undefined>();
    const [classroomUserChart, setClassroomUserChart] = useState<ChartUserType | undefined>()

    const [classroomModuleMedia, setclassroomModuleMedia] = useState<any | undefined>()

    const [moduleAtivities, setmoduleAtivities] = useState<any | undefined>()

    const [classroomModule, setClassroomModule] = useState<ModuleList | undefined>()

    const [moduleId, setModuleId] = useState<any>()


    const { idMember, id } = useParams()


    const { data: userRequest, isLoading, isError } = useFetchRequestFindOneUser(idMember!);

    const { data: classroomUserChartRequest } = useFetchRequestFindChartUserClassroomBff(id!, idMember!);

    const { data: classroomModuleNotasChart } = useFetchRequestFindChartUserModuleClassroomBff(id!, idMember!, moduleId?.id)

    const { data: classroomModuleMediaRequest } = useFetchRequestFindChartUserModuleMediaClassroomBff(id!, idMember!)

    const {data: classroomModuleRequest} = useFetchRequestAllModule(parseInt(id!))

    useEffect(() => {
        if(classroomModuleRequest){
            setClassroomModule(classroomModuleRequest)
            setModuleId(classroomModuleRequest[0])
        }
    }, [classroomModuleRequest])
    

    useEffect(() => {
        if (userRequest) {
            setuser(userRequest)
        }
        if (classroomUserChartRequest) {
            setClassroomUserChart(classroomUserChartRequest)
        }
        if(classroomModuleNotasChart){
            setmoduleAtivities(classroomModuleNotasChart)
        }
        if(classroomModuleMediaRequest){
            setclassroomModuleMedia(classroomModuleMediaRequest)
        }
     
    }, [userRequest, classroomUserChartRequest, classroomModuleNotasChart, classroomModuleMediaRequest])



    const initialValue: UpdateUser = {
        name: user?.name ?? "",
        birthday: user?.registration[0]?.birthday ?? "",
        color_race: user?.registration[0]?.color_race ?? undefined,
        deficiency: user?.registration[0]?.deficiency ?? undefined,
        email: user?.email ?? "",
        sex: user?.registration[0]?.sex ?? undefined,
        zone: user?.registration[0]?.zone ?? undefined,
        cpf: user?.registration[0]?.cpf ?? "",
        responsable_telephone: user?.registration[0]?.responsable_telephone ?? "",
        kinship: user?.registration[0]?.kinship ?? "",
        responsable_cpf: user?.registration[0]?.responsable_cpf ?? "",
        responsable_name: user?.registration[0]?.responsable_name ?? ""
    }

    const { UpdateUserMutation, requestChangeAvatarRegistrationMutation } = UpdateUserController();

    const UpdateUser = (body: UpdateUser) => {
        if (file) {
            requestChangeAvatarRegistrationMutation.mutate({
                id: user?.id!,
                file: file[0],
            });
        }
        UpdateUserMutation.mutate(body)
    }
    return { initialValue, UpdateUser, user, isLoading, isError, file, setFile, classroomUserChart, moduleAtivities, classroomModuleMedia, classroomModule, moduleId, setModuleId }
}