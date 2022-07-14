import { Link } from "react-router-dom";
import styled from "styled-components";

export const WatchContainer = styled.div`
  display: flex;
  @media (max-width: 1120px) {
    & {
      flex-direction: column;
    }
  }
  @media (min-width: 1120px) {
    & {
      flex-direction: row;
    }
  }
  width: 100%;
  position: relative;
  height: 100%;
`;

export const PlaylistContainer = styled.div`
  flex: 0.45;
  padding: 2.5vh 20px 2.5vh 20px;
  overflow-y: scroll;
  height: 720px;

  @media (max-width: 1120px) {
    & {
        width: 100vh;
    }
  }

//   @media (max-width: 450px) {
//     & {
//         width: 100vh;
//     }
//   }
`;

export const VideoContainer = styled.div`
  flex: 1;
  @media (max-width: 1120px) and (min-width: 992px) {
    & {
    margin: auto;
    }
  }
  @media (min-width: 1120px) {
    & {
      padding: 2.5vh 20px 2.5vh 90px;
    }
  }
`;

export const Title = styled.div`
  padding-top: 2%;
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;

  @media (max-width: 1120px) {
    & {
        margin-left: 10px;
        font-size: 21px;
    }
  }
`;

export const VideoLink = styled(Link)`
  text-decoration: none;
  color: #030303; 
  font-family: Roboto;
  width: 500px;
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 1120px) {
    & {
        width: 100vh;
    }
  }

  @media (max-width: 450px) {
    & {
        width: 100vh;
    }
  }
`;

export const Image = styled.img`
    margin: -5% 0;
    width: 240px;

    &:hover {
        opacity: 0.8;
        }
    
  @media (max-width: 1120px) {
    & {
        width: 40vh;
    }
  }
  @media (max-width: 450px) {
    & {

        width: 53vh;
        
    }
  }
`;

export const VideosTitle = styled.div`
  margin-left: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;

  @media (max-width: 1120px) {
    & {
        margin-left: 10px;
        font-size: 20px;
    }
  }

`;
