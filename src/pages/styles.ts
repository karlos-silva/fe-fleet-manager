import styled from 'styled-components';

export const Container = styled.div`
  background-color: #CBD1D1;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const Wrapper = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;


  input {
    width: 800px;
    padding: 5px;
  }
`

export const Table = styled.div`
  background-color: #fff;
  width: 1024px;
  border-radius: 5px;
  border-collapse: collapse;
`

export const TableHeader = styled.div`
text-align: left;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr 0.5fr;

  th {
    font-weight: 400;
    padding: 10px;
  }
`

export const List = styled.div`
  background-color: red !important;
`

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr 0.5fr;
  text-align: left;
  background-color: #7C9999;
  align-items: center;
  justify-content: center;


  p {
    padding: 15px;
    font-size: 14px;
    word-break: break-all;
  }

  &:nth-child(even) {
    background-color: #B5E3E3;
  }

  a {
    cursor: pointer;
    width: 18px;
  }
`