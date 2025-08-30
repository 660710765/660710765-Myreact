import React from 'react';
import './TodoList.css';
const TodoList = () => {

    const todos = [
        { id: 1, text: 'ศึกษาการเขียนภาษา GO ', completed: true },
        { id: 2, text: 'ฝึกทำโจทย์ภาษา Go', completed: true },
        { id: 3, text: 'ศึกษาการทำ React', completed: true },
        { id: 4, text: 'ลองสร้าง Font end ด้วย React', completed: false },
        { id: 5, text: 'ลองเชื่อมFont end Back End เข้าด้วยกัน', completed: false }
    ];
  
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3 style={{color:'#ffffffff'}}>📝 รายการที่ต้องทำ</h3>
            

<div style={{
    backgroundColor: '#2e2e2e',  
    borderRadius: '20px',
    padding: '3px',
    margin: '15px 0'
}}>
    <div style={{
        backgroundColor: '#74f5a3ff', 
        width: `${percentage}%`,
        textAlign: 'center',
        borderRadius: '17px',
        padding: '8px 0',
        color: 'white',
        fontWeight: 'bold',
        transition: 'width 0.3s ease'
    }}>
        {percentage}%
    </div>
</div>

{/* Todo Items */}
<div style={{ margin: '20px 0' }}>
    {todos.map(todo => (
        <div 
            key={todo.id} className='todo-item'
            style={{
                padding: '12px',
                margin: '8px 0',
                borderRadius: '8px',
                border: '1px solid #404040', 
                display: 'flex',
                alignItems: 'center',
                backgroundColor: todo.completed ? '#1f1f1f' : '#2e2e2e', 
                transition: 'all 0.3s ease',
                color: todo.completed ? '#a3a3a3' : '#ffffff'  
            }}
        >
            <span style={{ marginRight: '12px', fontSize: '18px' }}>
                {todo.completed ? '✅' : '⬜'}
            </span>
            <span style={{
                flex: 1,
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
                {todo.text}
            </span>
        </div>
    ))}
</div>

{/* Summary */}
<div style={{
    marginTop: '20px',
    textAlign: 'center',
    padding: '15px',
    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)', // ม่วง-ฟ้า
    color: 'white',
    borderRadius: '8px',
    fontWeight: 'bold'
}}>
    ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
</div>
        </div>
    );
};

export default TodoList;