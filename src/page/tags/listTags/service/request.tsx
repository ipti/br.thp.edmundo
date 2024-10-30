import http from "../../../../service/axios"
import { logout } from "../../../../service/localstorage"
import { CreateTagsTypes } from "./types"

export const CreateTagsRequest = async (body: CreateTagsTypes) => {
    return await http.post("/tags", body)
}


export const UpdateTagsRequest = async (body: CreateTagsTypes, id: number) => {
    return await http.put("/tags/"+id, body)
}

export const DeleteTagsRequest = async (id: number) => {
    return await http.delete("/tags/"+id)
}

export const TagsRequest = async () => {
      return await http
        .get("/tags")
        .then((response) => response.data)
        .catch((err) => {
          if (err.response.status === 401) {
            logout()
            window.location.reload()
          }
          throw err;
        });
  }