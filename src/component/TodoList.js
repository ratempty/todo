import { useState } from 'react'
import { ListWrap,IndexWrap } from './Style'
import TodoItem from './TodoItem'

function TodoList ({todoListItem,setTodoListItem}){
  const [ selCate , setSelCate ] = useState('전체')   
  const choCate = [{id : 0 , name : '전체' },{id : 1 , name : '기타', color : '#00b9f1'},{id : 2 , name : '개인' , color: '#7200da'},{id : 3 , name : '공부' , color : '#f9320c'},{id : 4 , name : '쇼핑' , color : '#9B8281'}]
  const selecCate =  ( selCate == '전체')?   (todoListItem) : todoListItem.filter((item)=>( item.category == selCate )) 
  return(
    <ListWrap>
      <ul>
        {selecCate.map((item)=>(
          <TodoItem key={ item.id } todoItem={item} todoListItem={todoListItem} setTodoListItem={setTodoListItem} choCate={choCate} />
        ))}
      </ul>
      <IndexWrap>
        {choCate.map((item)=>(
          <button 
            key={item.id} 
            value={item.name} 
            className={(item.name == selCate)? 'on': '' }
            onClick={()=> {setSelCate(item.name)}}
            >{item.name}
          </button>
        ))}
      </IndexWrap>
    </ListWrap>
  )
}

export default TodoList