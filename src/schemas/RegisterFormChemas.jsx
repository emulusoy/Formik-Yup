import * as yup from 'yup'

export const registerFormScehemas=yup.object().shape({
    email:yup.string().email("Email Formatı Geçersiz").required("Email Adresi Zorunludur!"),
    age:yup.number().positive("Yaşınız Pozitif Olmalıdır!").integer("Yaşınız Tam Sayı Olmalıdır!").required("Yaş Girmek Zorunludur!"),
    password:yup.string().required("Şifreniz, Girmek Zorundasınız!"),
    confirmPassword:yup.string().required("Şifre Tekrarı Zorunludur!").oneOf([yup.ref('password',yup.password)],'Şifreler Aynı Olmalıdır'),
    term:yup.boolean().required("Lütfen onaylayınız!")
})