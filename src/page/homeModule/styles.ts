import styled from "styled-components";

export const FormaRecover = styled.div`
  position: absolute;
  z-index: 100;
  height: auto;
  width: auto;
  bottom: 0;
  right: 0;
  img {
    width: 70%;
    margin-left: 30%;
  }
  @media screen and (max-width: 990px) {
    display: none;
  }

  @media screen and (max-width: 1550px) {
    img {
      width: 50%;
      margin-left: 50%;
    }
  }
  @media screen and (max-width: 1200px) {
    img {
      width: 30%;
      margin-left: 70%;
    }
  }
`;

export const ImagePessoa = styled.div`
 img {
    width: 100%;
    /* margin-left: 30%; */
  }
  @media screen and (max-width: 600px) {
    display: none;
    img {
      width: none;
      /* margin-right: 50%; */
    }
  }


  @media screen and (max-width: 1200px) {
    width: 60%;
    img {
      width: 60%;
      margin-right: 50%;

    }
  }
`;

export const ContentPaper = styled.div`
    /* Layout e Dimensões */
    width: 100%;
    max-height: 1200px;
    overflow-y: auto;
    /* Estilo de Papel/Card */
    background-color: #ffffff; 
    border-radius: 8px; 
    box-shadow: 
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.08); 
    padding: 30px; 
    
    /* Configurações de Tipografia para Leitura */
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.7;
    color: #333333;

    /* 2. Estilos para o Conteúdo Interno (Importante para o HTML dinâmico) */
    
    /* Títulos */
    h1, h2, h3 {
        color: #1a1a1a;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    /* Parágrafos */
    p {
        margin-bottom: 15px;
    }

    /* Listas */
    ul, ol {
        margin-left: 20px;
        margin-bottom: 15px;
        padding-left: 0; /* Remove padding extra que alguns navegadores adicionam */
    }

    /* Blocos de Código */
    pre {
        background-color: #f5f5f5;
        border: 1px solid #eeeeee;
        padding: 15px;
        border-radius: 4px;
        overflow-x: auto; 
        font-family: 'Courier New', monospace; /* Fonte monoespaçada para código */
        color: #333;
    }

    /* Links */
    a {
        color: #007bff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
 
    @media(min-width: 600px) {
      iframe.ql-video {
          width: 100% !important;
      }
    }

`;


