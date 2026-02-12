import { createContext } from 'react'
import { ListModulesState } from './state'
import { ListModulesContextType } from '../../type'

export const ListModulesContext = createContext<ListModulesContextType | null>(
  null
)

const ListModulesProvider = ({ children }: { children: React.ReactNode }) => {
  const { modulesList, isError, isLoading, DeleteModule, setModulesList } =
    ListModulesState()

  return (
    <ListModulesContext.Provider
      value={{ modulesList, isError, isLoading, DeleteModule, setModulesList }}
    >
      {children}
    </ListModulesContext.Provider>
  )
}

export default ListModulesProvider
