import { Module } from "../type";

export interface HomeModulesContextType {
    modules: Module | undefined
    handleViewdClassesUser: (idUser: number, idClasse: number, idClassroom: number) => void
}

