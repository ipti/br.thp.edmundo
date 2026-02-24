import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../../Components/Button'
import CardModule from '../../../Components/Card/CardModule'
import ContentPage from '../../../Components/ContentPage'
import Empty from '../../../Components/Empty'
import { Padding, Row } from '../../../Styles/styles'
import { ListModulesContextType } from '../type'
import ListModulesProvider, { ListModulesContext } from './context/context'

import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable'
import SortableItem from './components/SortableItem'
import { ReoderModulesRequest } from './service/request'

const ModuleList = () => {
  return (
    <ListModulesProvider>
      <ModuleListPage />
    </ListModulesProvider>
  )
}

const ModuleListPage = () => {
  const history = useNavigate()

  const [orders, setOrders] = useState(false)

  const modulesListContext = useContext(
    ListModulesContext
  ) as ListModulesContextType

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = modulesListContext.modulesList!.findIndex(
        item => item.id === active.id
      )

      const newIndex = modulesListContext.modulesList!.findIndex(
        item => item.id === over.id
      )

      const newList = arrayMove(
        modulesListContext.modulesList!,
        oldIndex,
        newIndex
      )

      modulesListContext.setModulesList(newList)

      const ordered = newList.map((item, index) => ({
        id: item.id,
        order: index + 1
      }))

      try {
        await ReoderModulesRequest({ newOrder: ordered })
        console.log('Reorder salvo com sucesso')
      } catch {
        console.error('Erro ao salvar reorder')
      }
    }
  }

  return (
    <ContentPage title="Módulos adicionados" description="Listar módulos ">
      <Row id="end" className='gap-2' style={{}}>
        <ButtonComponent
          label={orders ? "Cancelar ordenação" : "Ordenar módulos"}
          icon="pi pi-sort-alt"
          loading={false}
          onClick={() => {
            setOrders(!orders)
          }}
        />
        <ButtonComponent
          label="Criar módulos"
          icon="pi pi-plus"
          onClick={() => {
            history('/modulos/criar')
          }}
        />
      </Row>
      <Padding padding="16px" />

      {orders && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%)',
            border: '1.5px solid #a5b4fc',
            borderRadius: '10px',
            padding: '10px 18px',
            marginBottom: '16px',
            color: '#4338ca',
            fontWeight: 600,
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
          }}
        >
          <i className="pi pi-sort-alt" style={{ fontSize: '18px', color: '#6366f1' }} />
          <span>Modo de ordenação ativo — arraste os cards para reorganizar os módulos</span>
          <i className="pi pi-arrows-alt" style={{ fontSize: '16px', color: '#6366f1', marginLeft: '4px' }} />
        </div>
      )}

      {modulesListContext.modulesList && (
        <>
          {orders ? <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={modulesListContext.modulesList.map(item => item.id)}
              strategy={rectSortingStrategy}
            >
              <div className="grid">
                {modulesListContext.modulesList.map(item => (
                  <div className="col-12 md:col-6 lg:col-4" key={item.id}>
                    <SortableItem id={item.id} reorderActive={true}>
                      <CardModule
                        id={item.id}
                        title={item.name}
                        handleDelete={() => {
                          modulesListContext.DeleteModule(item.id)
                        }}
                        redirect={`/modulos/${item.id}`}
                      />
                    </SortableItem>
                  </div>
                ))}
              </div>
            </SortableContext>
          </DndContext> : <div className="grid">
            {modulesListContext.modulesList.map(item => (
              <div className="col-12 md:col-6 lg:col-4" key={item.id}>
                <SortableItem id={item.id} reorderActive={false}>
                  <CardModule
                    id={item.id}
                    title={item.name}
                    handleDelete={() => {
                      modulesListContext.DeleteModule(item.id)
                    }}
                    redirect={`/modulos/${item.id}`}
                  />
                </SortableItem>
              </div>
            ))}
          </div>}
        </>
      )}
      {modulesListContext.modulesList?.length === 0 && (
        <Empty title="Módulos" />
      )}
    </ContentPage>
  )
}

export default ModuleList
