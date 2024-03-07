import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/register.css"
import {useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
          
          let [inputUseStatePhone, inputUseStateFunctionPhone] = useState("")
          
          let [pValue,setValueParagraph] = useState("")
          let navigate = useNavigate()
          
    const fechingData =   () => {
   
     
        
          
          localStorage.setItem("username", inputUseStatePhone.trim());
          navigate("/");
        
        }
        
      
      

      
    
      
           
          
function formHandeler() {

            
  if (inputUseStatePhone.length > 8) {
    fechingData();
  } else {
    //localStorage.setItem("username",inputElemFirst.current.value)
    setValueParagraph("لطفا اطلاعات را درست وارد کنید");
  }
           
           
}
          
  return (
    <div className="continer Register">
      <form>
        <div>
          <p>ثبت نام | ورود</p>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            شماره موبایل خود را وارد کنید
          </label>
          <input
            maxLength={11}
            placeholder="شماره موبایل"
            value={inputUseStatePhone}
            onChange={(e) => {
              const value = e.target.value;
              inputUseStateFunctionPhone(value);
            }}
            type="phone"
            className="form-control"
            
            
          />
        </div>

        <button
          onClick={formHandeler}
          type="button"
          className="btn btn-primary"
        >
          ثبت نام/ورود
        </button>

        <p className="pRegister">{pValue}</p>
      </form>
    </div>
  );
}
 
export default Register;