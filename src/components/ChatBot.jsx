import { useState } from 'react'
import {Send} from 'lucide-react'


const ChatBot = ({ close }) => {
const [input,setInput]=useState('')
const [msg,setMsg]=useState([{
    sender:'bot',
    text:'How can I help you?'
}])
    const handleSubmit = (e) =>{
    e.preventDefault()
    if(!input.trim()) return
    const userMsg={sender:'user',text:input}
    setMsg((prev)=>[...prev,userMsg])
    const userText=input.toLowerCase()
    let botResponse=''
    if(userText.includes('hello' || 'hi' || 'hey')){
        botResponse='Hey! How can I help you today?'
      }
      else if((userText.includes('breakfast'))){
        botResponse='Try Idli, Oats, Poha, Omelette, or a Fruit Smoothie for a healthy start.'
      }
      else if((userText.includes('lunch'))){
        botResponse='Grilled chicken with rice, vegetable biryani, chapati with curry, or a fresh salad.'
      }
      else if((userText.includes('dinner'))){
        botResponse='Keep it light with soup, grilled vegetables, paneer stir-fry, or pasta.'
      }
      else if((userText.includes('protein'))){
        botResponse='Eggs, chicken, fish, paneer, tofu, lentils, and Greek yogurt are excellent protein sources.'
      }
      else if((userText.includes('weight loss tips'))){
        botResponse='Choose balanced meals, control portion sizes, drink plenty of water, and include protein in every meal.'
      }
      else if((userText.includes('Vegetarian' || 'veg'))){
        botResponse='Paneer butter masala, chana masala, dal rice, vegetable pulao, or tofu curry.'
      }
      else if((userText.includes('Quick Meal'))){
        botResponse='Sandwiches, wraps, fried rice, salads, or one-pot meals can be prepared in under 30 minutes.'
      }
      else if((userText.includes('Healthy Meals'))){
        botResponse='Breakfast: Oatmeal with fruits and nuts Lunch: Brown rice, vegetables, and grilled chicken/paneer Dinner: Vegetable soup with whole wheat bread Snacks: Fruits, yogurt, or a handful of nuts'
      }
    else{
        botResponse='Sorry! I cannot help you.'
    }
    setTimeout(()=>{
        setMsg((prev)=>[...prev,{sender:'bot',text:botResponse}])
    },1000)
    setInput('')
    }
  return (
        <div className="chat-Container">
                <div className="header">Chatbot
                <button onClick={()=>close()} className='botclose'>X</button></div>
                <div className="chatbox">
                    {msg.map((message,index)=>(
                        <div key={index} className={message.sender==="user"?"userbox":"bot-box"}>
                            {message.text}
                        </div>
                    ))}
                 
                </div>
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Type something...' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button><Send color='white'/></button>
              </form>
            </div>
  )
}

export default ChatBot