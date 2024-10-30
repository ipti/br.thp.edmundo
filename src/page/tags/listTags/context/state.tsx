import { useEffect, useState } from "react";
import { CreateTagsController } from "../service/controller"
import { useFetchRequestTagsList } from "../service/query";
import { CreateTagsTypes } from "../service/types"

export const CreateTagsState = () => {
    const [tags, setTags] = useState<any>()

    const { data: tagsRequest } = useFetchRequestTagsList()

    useEffect(() => {
        if (tagsRequest) {
            setTags(tagsRequest)
        }
    }, [tagsRequest])


    const { CreateTagsRequestMutation, DeleteTagsRequestMutation, UpdateTagsRequestMutation } = CreateTagsController();

    const CreateTags = (body: CreateTagsTypes) => {
        CreateTagsRequestMutation.mutate({ ...body })
    }

    const UploadTags = (body: CreateTagsTypes, id: number) => {
        UpdateTagsRequestMutation.mutate({ data: body, id: id })
    }

    const DeleteTags = (id: number) => {
        DeleteTagsRequestMutation.mutate(id)
    }

    return { CreateTags, tags, UploadTags, DeleteTags }
}