import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HomeModuleController } from "../service/controller";
import { useFetchRequestHomeFindOneModuleBff } from "../service/query";
import { Module } from "../type";

export const HomeModulesState = () => {

  const { idModule, idClassroom } = useParams()
  const [modules, setModuleuser] = useState<Module | undefined>()

  const { data: ModuleUserRequest } = useFetchRequestHomeFindOneModuleBff(idModule!, idClassroom!)

  const controller = HomeModuleController()

  const handleViewdClassesUser = (idUser: number, idClasse: number) => {
    controller.ViewdClassesUsersMutation.mutate({ idUser, idClasse })
  }

  useEffect(() => {
    if (ModuleUserRequest) {
      setModuleuser(ModuleUserRequest)
    }
  }, [ModuleUserRequest])

  return { modules, handleViewdClassesUser }
}