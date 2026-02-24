import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type Props = {
  id: number
  children: React.ReactNode
  reorderActive?: boolean
}

export default function SortableItem({ id, children, reorderActive }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: reorderActive ? (isDragging ? 'grabbing' : 'grab') : 'default',
    outline: isDragging ? '2px solid #6366f1' : reorderActive ? '2px dashed #a5b4fc' : 'none',
    borderRadius: '16px',
    opacity: isDragging ? 0.7 : 1,
    boxShadow: isDragging ? '0 8px 24px rgba(99,102,241,0.35)' : reorderActive ? '0 2px 8px rgba(99,102,241,0.15)' : 'none',
    position: 'relative',
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(reorderActive ? attributes : {})}
      {...(reorderActive ? listeners : {})}
    >
      {reorderActive && (
        <div
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            background: isDragging ? '#6366f1' : '#e0e7ff',
            borderRadius: '6px',
            padding: '4px 6px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            color: isDragging ? '#fff' : '#6366f1',
            fontWeight: 600,
            boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <i className="pi pi-arrows-alt" style={{ fontSize: '12px' }} />
          {isDragging ? 'Movendo...' : 'Arrastar'}
        </div>
      )}
      {children}
    </div>
  )
}
