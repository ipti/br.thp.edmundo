import { useEffect, useState } from "react";
import { useFetchRequestHomeFindOneModuleBff } from "../service/query";
import { useParams } from "react-router-dom";
import { Module } from "../type";

export const HomeModulesState = () => {

  const { idModule, idClassroom } = useParams()
  const [modules, setModuleuser] = useState<Module | undefined>()

  const { data: ModuleUserRequest } = useFetchRequestHomeFindOneModuleBff(idModule!, idClassroom!)

  useEffect(() => {
    if (ModuleUserRequest) {
      setModuleuser(ModuleUserRequest)
    }
  }, [ModuleUserRequest])

  return { modules }
}