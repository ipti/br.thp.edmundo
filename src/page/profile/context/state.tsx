import { useEffect, useState } from "react"
import { useQuery } from "../../../Controller/controllerGlobal"
import { GetIdUser } from "../../../service/localstorage"
import { UpdateUserController } from "../service/controller"
import { useFetchRequestFindOneUser, useFetchRequestFindTagsUser } from "../service/query"
import { CreateUserTagsDto, Tags, UpdateUser, User } from "../service/types"


export const UpdateUserState = () => {


    const [user, setuser] = useState<User | undefined>()
    const [file, setFile] = useState<File[] | undefined>();
    const [tags, setTags] = useState<Tags | undefined>()
    const [tagsUser, settagsUser] = useState<Tags>([]);

    const query = useQuery()

   const id =  query.get("id")


    const { data: userRequest, isLoading, isError } = useFetchRequestFindOneUser(id ?? GetIdUser()!);

    const { data: tagsRequest } = useFetchRequestFindTagsUser()

    useEffect(() => {
        if (userRequest) {
            setuser(userRequest)
            var tagsUser = userRequest?.tags_users.map((item: any) => { return item.tag })
            settagsUser(tagsUser!)
        }
        if (tagsRequest) {
            setTags(tagsRequest)
        }
    }, [userRequest, tagsRequest])




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


    const { UpdateUserMutation, requestChangeAvatarRegistrationMutation, requestAddTagUserMutation } = UpdateUserController();

    const UpdateUser = (body: UpdateUser) => {
        if (file) {
            requestChangeAvatarRegistrationMutation.mutate({
                id: user?.id!,
                file: file[0],
            });
        }
        UpdateUserMutation.mutate(body)
        var tagsUserBody: CreateUserTagsDto = {
            items: [

            ]
        }

        for (const i of tagsUser) {
            tagsUserBody.items.push({ idTag: i.id })
        }
        requestAddTagUserMutation.mutate(
            tagsUserBody
        )
    }

    const AddUser = (idTag: number) => {
    }
    return { initialValue, UpdateUser, user, isLoading, isError, file, setFile, tags, AddUser, tagsUser, settagsUser }
}