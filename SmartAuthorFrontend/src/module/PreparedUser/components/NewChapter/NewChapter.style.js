// import styled from "styled-components";
// import theme from "../../../../theme/Themes";

// export const NewChapterWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 80%;
//     margin-right: 10px;
//     border-radius: 40px;
// `;

// export const NewChapterContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     gap: 20px;
//     padding: 20px;
//     background: ${theme.colors.white};
//     justify-content: space-between;
// `;

// export const NewChapterEditBook = styled.p`
//     font-size: ${theme.font.size.small};
//     margin: 0;
//     padding: 5px 30px;
//     border-radius: 20px;
//     border: 1px solid ${theme.colors.navy};
//     cursor: pointer;
// `;

// export const NewChapterButtons = styled.div`
//     display: flex;
//     gap: 10px;
// `;

// export const ExportButton = styled.button`
//     padding: 5px 20px;
//     background: ${theme.colors.navy};
//     color: ${theme.colors.white};
//     border: none;
//     border-radius: 20px;
//     font-size: ${theme.font.size.small};
// `;

// export const PreviewButton = styled.button`
//     padding: 5px 20px;
//     background: ${theme.colors.navy};
//     color: ${theme.colors.white};
//     border: none;
//     border-radius: 20px;
//     font-size: ${theme.font.size.small};
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   margin: 20px 0;
//   /* justify-content: space-between; */
//   width: 40%;
//   position: absolute;
//   z-index: 1;
//   bottom: -40px;
//   justify-content: center;
//   align-items: anchor-center;

//   @media ${theme.media.lg} {
//     bottom: 40px;
//   }

//   .AddChapter {
//     background: ${theme.colors.navy};
//     color: ${theme.colors.white};
//     font-family: ${theme.font.Geologica};
//     font-size: 16px;
//     border: none;
//     padding: 10px 15px;
//     border-radius: 20px;
//     cursor: pointer;
//     margin: 10px;
//     font-weight: 500;
//   }

//   .next{
//     background: ${theme.colors.transparnt};
//     border: none;
//     color: ${theme.colors.black};  
//     font-family: ${theme.font.Geologica};
//     font-size: ${theme.font.size.medium};
//     padding: 10px;
//     cursor: pointer;
//     margin: 10px ;
//     font-weight: bold;
//   }

//   .Regenerate {
//     background: ${theme.colors.buttonGradient};
//     border: none;
//     color: ${theme.colors.black};  
//     font-family: ${theme.font.Geologica};
//     font-size: ${theme.font.size.medium};
//     padding: 5px 20px; 
//     border-radius: 20px;
//     cursor: pointer;
//     margin-left: auto; ;
//     font-weight: bold;
//     height: 40px;
//   }


//   `;




import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const NewChapterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 10px;
    border-radius: 40px;
`;

export const NewChapterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    background: ${theme.colors.white};
    justify-content: space-between;
`;

export const NewChapterEditBook = styled.p`
    font-size: ${theme.font.size.small};
    margin: 0;
    padding: 5px 30px;
    border-radius: 20px;
    border: 1px solid ${theme.colors.navy};
    cursor: pointer;
`;

export const NewChapterButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const ExportButton = styled.button`
    padding: 5px 20px;
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    border-radius: 20px;
    font-size: ${theme.font.size.small};
    cursor: pointer;
`;

export const PreviewButton = styled.button`
    padding: 5px 20px;
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    border-radius: 20px;
    font-size: ${theme.font.size.small};
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0;
  width: 40%;
  position: absolute;
  z-index: 1;
  bottom: -40px;
  justify-content: center;
  align-items: center;

  @media ${theme.media.lg} {
    bottom: 40px;
  }

  .AddChapter {
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    font-family: ${theme.font.Geologica};
    font-size: 16px;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px;
    font-weight: 500;
  }

  .next {
    background: ${theme.colors.transparent};
    border: none;
    color: ${theme.colors.black};  
    font-family: ${theme.font.Geologica};
    font-size: ${theme.font.size.medium};
    padding: 10px;
    cursor: pointer;
    margin: 10px;
    font-weight: bold;
  }

  .Regenerate {
    background: ${theme.colors.buttonGradient};
    border: none;
    color: ${theme.colors.black};  
    font-family: ${theme.font.Geologica};
    font-size: ${theme.font.size.medium};
    padding: 5px 20px; 
    border-radius: 20px;
    cursor: pointer;
    margin-left: auto;
    font-weight: bold;
    height: 40px;
  }
`;

/* ======= MODAL STYLES ======= */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 100%;
  max-width: 100%;

  .close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    color: ${theme.colors.white};
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;
