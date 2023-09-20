import React, { useState ,useRef , useEffect } from 'react'
import Category from './Category';
import { ListStyle } from './Style'
import { faPen,faTrash,faFloppyDisk,faThumbTack,faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";


function TodoItem({todoItem, todoListItem, setTodoListItem , choCate}) {
  const [ isEdit , setIsEdit ] = useState(false)
  const [ editText , setEditText ] = useState(todoItem.text)
  const [ category , setCategory ] = useState(todoItem.category)
  const [ editDate , setEditDate ] = useState(new Date(todoItem.date))
  const editEnd=()=>{
    const newList = todoListItem.map((item)=>({
      ...item,
      text: item.id === todoItem.id? editText : item.text,
      category : item.id === todoItem.id? category : item.category,
      date : item.id == todoItem.id? editDate : item.date
    }))
    setTodoListItem(newList)
    setIsEdit(false)
  }
  const removeList = (id)=>{
    const newList = todoListItem.filter((item)=> item.id != id)
    setTodoListItem(newList)
  }
  const togglePin=()=>{
    const newList = todoListItem.map((item)=>({
      ...item , isPined : item.id == todoItem.id? !item.isPined : item.isPined
    }))
    const targetIndex = newList.findIndex((item)=>item.id==todoItem.id)
    const targetItem = newList[targetIndex]
    newList.splice(targetIndex,1)
    targetItem.isPined? newList.unshift(targetItem) : newList.push(targetItem)
    setTodoListItem(newList)
  }
  const pinColor = {
    color : todoItem.isPined ? 'red' : '#222' ,
    margin : '0 5px'
  }
  const chkOnChange=()=>{
    const newList = todoListItem.map((item)=>({
      ...item,
      checked : (item.id==todoItem.id)? !item.checked : item.checked
    }))
    setTodoListItem(newList)
  }
  const chkColor={
    color : todoItem.checked ? 'red' : '#222',
    display: isEdit? 'none' : 'inline-block',
    width:'15px'
  }
  const textStyle ={
    textDecoration : todoItem.checked? 'line-through' : 'none',
    color : todoItem.checked? '#aaa' : '#222'
  }
  const chkDate = new Date()
  const getColor = (choName)=>{
    const itColor = choCate.find((item)=> item.name === choName )
    return itColor? itColor.color : ''
  }
  return (
    <ListStyle>
      <input type="checkbox" id={`chkbox${todoItem.id}`} checked={todoItem.checked} disabled={isEdit} 
      onChange={chkOnChange} />
        <label htmlFor={`chkbox${todoItem.id}`} style={ chkColor }>
          <FontAwesomeIcon icon={faCheck} />
        </label>
      {isEdit?
      <>
        <Category setCategory={setCategory} />
        <input type='text' className="textInput" value={editText} onChange={(e)=>setEditText(e.target.value)} autoFocus />
        <DatePicker dateFormat='MM/dd' selected={editDate} onChange={(date)=>setEditDate(date)}></DatePicker>
        <button onClick={editEnd}><FontAwesomeIcon icon={faFloppyDisk} /></button>
      </>
      :
      <>
        <button onClick={togglePin} style={pinColor}><FontAwesomeIcon icon={faThumbTack} /></button>
        <span className="cate">{todoItem.category}</span>
        {choCate.filter((item) => item.name === todoItem.category).map((item)=>(
          <span key={item.id}
            className="color" 
            style={{ display : 'inline-block' , 
            width:'2px', height:'25px' ,transform:'translate(5px , 7px)', background:item.name === todoItem.category ? getColor(item.name) : 'transparent' }}>
          </span>
        ))}
        <span className='text' style={ textStyle }>{todoItem.text}</span>
        <span className='date'>{(
          chkDate.toISOString().split('T')[0].split('-')[1]+' / '+chkDate.toISOString().split('T')[0].split('-')[2] == todoItem.date.toISOString().split('T')[0].split('-')[1]+' / '+todoItem.date.toISOString().split('T')[0].split('-')[2])? 
          'Today' : todoItem.date.toISOString().split('T')[0].split('-')[1]+' / '+todoItem.date.toISOString().split('T')[0].split('-')[2]
        }</span>
        <button onClick={()=>{setIsEdit(true); }}><FontAwesomeIcon icon={faPen} /></button>
        <button onClick={()=>removeList(todoItem.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </>
      }
    </ListStyle>
  )
}


export default TodoItem