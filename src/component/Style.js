import styled from 'styled-components';

export const Wrapper = styled.section`
  width:600px; height: 80vh; margin: 10vh auto;
  font-family: 'Kaushan Script', 'Pretendard-Regular';
  background:#ebe5ab; position:relative;
  box-sizing:border-box; overflow-y: hidden;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,.5);
  & button{ cursor:pointer ;}
`

export const Header = styled.h1`
  color: #fff; text-align:center; font-size:40px; background : #011132;
`

export const ListWrap = styled.div`
  padding: 30px 20px; height:calc(100% - 250px); overflow-y: scroll; position: relative;
  font-family:  'Pretendard-Regular','Kaushan Script';
  &::-webkit-scrollbar{ display: none; }
`
export const ListStyle = styled.li`
  padding : 5px 10px; border-bottom:1px dotted #aaa; height:40px; line-height:40px;
  display:flex; 
  & .cate { border-right:1px dotted #ccc; width:49px; }
  & .text { margin-right : auto; padding-left:10px; }
  & .date { color: #999; font-size:.8rem; }
  & input[type=checkbox]{ display:none; }
  & select{ width : 75px; height:40px!important; box-sizing:border-box; }
  & button{ background: transparent ; padding : 0 10px; width : 30px; }
  & select{ margin-right : 10px; padding-right : 10px ; background : #ebe5ab;}
  & .textInput { width:300px; margin-right : auto; padding-left : 10px; border-radius: 10px; }
  & input:focus{ outline : none; }
  & select:focus{ outline : none; }
`

export const IndexWrap = styled.div`
  position:fixed; left:calc(50% + 280px) ; top:calc(50% - 30vh);
  & button{ 
    display:block; width:80px; height:30px; border-radius:3px; margin-top: 5px; color: #ededed;  text-shadow:1px 1px 1px rgba(0,0,0,0.5); 
    font-weight:700;  font-family: 'Pretendard-Regular','Kaushan Script'; transition: all .4s; box-shadow: 3px 3px 0px 0px rgba(0,0,0,.4);
  }
  & button:nth-child(1) {background:#f9c00c;}
  & button:nth-child(2) {background:#00b9f1;}
  & button:nth-child(3) {background:#7200da;}
  & button:nth-child(4) {background:#f9320c;}
  & button:nth-child(5) {background:#9B8281;}
  & .on{ margin-left : 10px;font-size:15px; }
`