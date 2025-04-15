import styled from "styled-components";

export const Container = styled.div`
  .carousel-item{
    padding-right: 40px;
}
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 56px;
    height: 4px;
    background: #9758a6;
    left: calc(50% - 28px);
    
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.$imageUrl}');
  background-size: cover;
  background-position: center;
  border-radius:20px;


  display: flex;
  align-items: center;  
  padding: 20px 10px;
  width: 100%;
  height: 250px;

  p{
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;

  }
`;