import React from 'react';

// Interfaces (para tipagem, já que você está usando TypeScript)
interface ItemStatusProps {
  title: string;
  isCompleted: boolean;
  isSelected: boolean;
  type?: 'classes' | 'activities'; // Adicionando type
  onClick?: () => void; // Adicionando onClick
  onView?: () => void;
}

// --- Estilos em Linha para Demonstração ---
// Em um projeto real, use um arquivo CSS ou styled-components.
const itemStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'space-around',
  padding: '10px 12px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  borderRadius: '4px',
  marginBottom: '4px',
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
};

const itemActiveStyle: React.CSSProperties = {
  ...itemStyle,
  backgroundColor: '#e6f7ff', // Fundo azul claro para item selecionado
  color: '#1890ff',
  fontWeight: 'bold',
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.25rem', // Tamanho padrão do ícone (20px)
  marginRight: '12px',
  color: '#40a9ff', // Cor azul padrão
};

const statusIconStyle: React.CSSProperties = {
  marginLeft: 'auto',
  fontSize: '1rem', // Ícone de status um pouco menor
};

// --- Componente Principal ---
const ItemStatus: React.FC<ItemStatusProps> = ({ title, isCompleted, isSelected, onClick, type, onView }) => {



  // Ícone Principal (Pessoa) - pi-user é um bom substituto para FaUserCircle
  const typeIconClass = type === 'activities' ? 'pi pi-pen-to-square' : 'pi pi-book';

  // Ícone de Status (Visualizado/Não Visualizado)
  const statusIconClass = isCompleted ? 'pi pi-circle-fill' : 'pi pi-circle-off';

  // Cor do Ícone de Status
  const statusIconColor = isCompleted ? '#52c41a' : '#bfbfbf'; // Verde (Visualizado) ou Cinza (Pendente)

  return (
    <div
      style={isSelected ? itemActiveStyle : itemStyle}
      onClick={onClick}
    >
      {/* 1. Ícone do Tipo (PrimeIcons) */}
      <i className={typeIconClass} style={iconStyle}></i>

      {/* 2. Título da Aula/Atividade */}
      <span style={{ flexGrow: 1 }}>
        {title}
      </span>

      {/* 3. Ícone de Status (PrimeIcons) */}
      <i
        className={statusIconClass}
        style={{ ...statusIconStyle, color: statusIconColor }}
        onClick={e => {
          e.stopPropagation(); // Impede que o clique no ícone dispare o onClick do item
          if (onView) {
            onView();
          }
        }}
      ></i>
    </div>
  );
};

export default ItemStatus;