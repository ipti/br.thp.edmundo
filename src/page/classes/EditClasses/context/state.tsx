import { useParams } from "react-router-dom";
import {
    Classes,
    EditClasses
} from "../../type";
import { EditClassesController } from "../service/controller"
import { useEffect, useState } from "react";
import queryClient from "../../../../service/reactquery";
import { useFetchRequestFindOneClasses } from "../service/query";

export const EditClassesState = () => {

    const { idClasses } = useParams();

    const [classesOne, setClassessOne] = useState<Classes | undefined>()

    const initialValue:
        EditClasses = {
        name: classesOne?.name ?? "",
        duration: classesOne?.duration ?? 0,
        necessary_material: classesOne?.necessary_material ?? "",
        objective: classesOne?.objective ?? "",
        content: classesOne?.content ?? ""
    }

    const [is, setIs] = useState(false)



    const { data: classesOneRequest } = useFetchRequestFindOneClasses(idClasses!);


    useEffect(() => {
        if (classesOneRequest && is) {
            setClassessOne(classesOneRequest)
        }
    }, [classesOneRequest, is])




    useEffect(() => {

        queryClient.removeQueries("useRequestsOneClasses")
        setIs(true)
    }, [])


    const { EditClassesMutation } = EditClassesController();

    const EditClasses = (body:
        EditClasses, id: number) => {
        EditClassesMutation.mutate({ data: body, id: id })
    }
    return { initialValue, EditClasses, classesOne }
}