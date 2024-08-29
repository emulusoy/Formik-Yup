
import { useFormik } from 'formik';
import { registerFormScehemas } from '../schemas/RegisterFormChemas';
function RegisterForm() {

    const submit=(values,action)=>{
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    }

    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          age:'',
          password:'',
          confirmPassword:'',
          term:''
        },
        validationSchema: registerFormScehemas,//şemayı çağırdık
        onSubmit:submit
        
      });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='inputDiv'>
            <label htmlFor="">Email</label>
            <input type="text" id="email" placeholder="Email Giriniz"
            value={values.email} onChange={handleChange}/>
            {errors.email && <p className='input-error'>{errors.email}</p>}
        </div>
        <div className='inputDiv'>
            <label htmlFor="">Yaş</label>
            <input type="number" id="age" placeholder="Yaşınızı Giriniz"
            value={values.age} onChange={handleChange}/>
            {errors.email && <p className='input-error'>{errors.age}</p>}
        </div>
        <div className='inputDiv'>
            <label htmlFor="">Şifre</label>
            <input type="password" id="password" placeholder="Şifrenizi Giriniz"
            value={values.password} onChange={handleChange}/>
            {errors.email && <p className='input-error'>{errors.password}</p>}
        </div>
        <div className='inputDiv'>
            <label htmlFor="">Tekrar Şifre</label>
            <input type="password" id="confirmPassword" placeholder="Şifrenizi Tekrar Giriniz"
            value={values.confirmPassword} onChange={handleChange}/>
            {errors.email && <p className='input-error'>{errors.confirmPassword}</p>}
        </div>
        <div className='inputDiv'>
            <div className='check'>
            <input className='checkbox' type="checkbox" id="term" 
            value={values.term} onChange={handleChange}/>
            <label htmlFor="">Okudum, onaylıyorum</label>
            </div>
            {errors.email && <p className='input-error'>{errors.term}</p>}
        </div>
        <button className='btn' type='submit'>Kayıt Ol</button>
      </form>
    </div>
  );
}

export default RegisterForm;
