import styled from "styled-components";
import styles from ".";

interface PropsReverse {
  reverse?: boolean
}

export const Column = styled.div<PropsReverse>`
  display: flex;
  flex-direction: column;

  #space-between {
    justify-content: space-between;
  }
  #center {
    justify-content: center;
  }
  #start {
    justify-content: start;
  }
  #end {
    justify-content: end;
  }

  @media (max-width: 600) {
    flex-direction: ${(props: any) => props.reverse ? "row" : "column"};
  }
`;

export const Row = styled.div<PropsReverse>`
  display: flex;
  flex-direction: row;

  #space-between {
    justify-content: space-between;
  }
  #center {
    justify-content: center;
  }
  #start {
    justify-content: start;
  }
  #end {
    justify-content: end;
  }

  @media (max-width: 600) {
    flex-direction: ${(props: any) => props.reverse ? "column" : "row"};

  }
`;

interface PropsPadding {
  padding?: string;
}

export const Padding =styled.div<PropsPadding> `
    padding: ${(props: any) => props.padding || "4px"};
`;

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  overflow-y: auto;
  width: 100%;
  padding: 4% ;
  font-size: ${styles.typography.font.medium};
  font-family: ${styles.typography.types.inter};
`;