import { useEffect, useState } from 'react'
import { ModulesList } from '../../type'
import { ListModuleController } from '../service/controller'
import { useFetchRequestAllModule } from '../service/query'

export const ListModulesState = () => {
  const [modulesList, setModulesList] = useState<ModulesList | undefined>()

  const {
    data: classroomRequest,
    isLoading,
    isError
  } = useFetchRequestAllModule()
  const { DeleteModuleRequestMutation } = ListModuleController()

  const DeleteModule = (id: number) => {
    DeleteModuleRequestMutation.mutate(id)
  }

  useEffect(() => {
    if (classroomRequest) {
      setModulesList(classroomRequest)
    }
  }, [classroomRequest])

  return { modulesList, isLoading, isError, DeleteModule, setModulesList }
}
