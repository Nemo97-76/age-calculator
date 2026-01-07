import { useState } from 'react'
import { Button, FormControl, FormLabel, Input } from '@mui/joy'
import './App.css'

const App=()=>{
  const [birthDate, setBirthDate] = useState('');
  const [time,setTime]=useState("years")
  const [age, setAge] = useState(null);
  const calulateAge=()=>{
    const birthDateObj=new Date(birthDate);
    const today=new Date()
    const ageinMillisec=today-birthDateObj;
    if(!birthDate){
      alert("choose a date first")
    }
if(birthDateObj.getFullYear()==today.getFullYear() && (birthDateObj.getMonth() != today.getMonth() )){
    const ageInMonths=Math.floor(ageinMillisec/(1000*60*60*24*30))
    setAge(ageInMonths)
    setTime("months")
}else if(birthDateObj.getFullYear()==today.getFullYear()&&(birthDateObj.getMonth()==today.getMonth())){
    alert("choose a valid date")
}else{
  const ageInYears=Math.floor(ageinMillisec/(1000*60*60*24*365))
  setAge(ageInYears)
setTime("years")
}
  }
  return (
    <div className='App'>
    <h3>Age calculator</h3>
      <div className='container'>
<FormLabel className="label">birthday date</FormLabel>
      <Input
value={birthDate}
onChange={(e)=>setBirthDate(e.target.value)}
className='date'
        type="date"
      />
   <Button  onClick={calulateAge} className='submit'>submit</Button>
      </div>{/* /container */}
{age>0 && <div className='result'>you are <span id='age'>{age}</span> {time} old</div>}
    </div>
  )
}

export default App
