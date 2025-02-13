import { useQuery } from "react-query";
import http from "../../../../service/axios";
import { logout } from "../../../../service/localstorage";

export const ListGroupRequest = async () => {

    return await http
      .get("/group")
      .then((response) => response.data)
      .catch((err) => {
        if (err.response.status === 401) {
          logout()
          window.location.reload()
        }
        throw err;
      });
  
}


export const useFetchRequestGroupList = () => {
    return useQuery(["useRequestsListGroup"], () => ListGroupRequest());
  };

