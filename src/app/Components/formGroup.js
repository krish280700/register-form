import Label from './Base/label'
import Input from './Base/input'
import Errormsg from './Base/errorMsg'

export default function Formgroup({form, handleChange, formval, register, control, error}){
    return (
        <div className='mb-6'>
            <Label form={form} />
            <Input form={form} inputVal={formval[form.name]} control={control} register={register} handleChange={handleChange}/>
            <Errormsg err={error} form={form} />
        </div>
    )
}