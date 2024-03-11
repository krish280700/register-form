import Label from './Base/label'
import Input from './Base/input'
import Errormsg from './Base/errorMsg'


export default function Formgroup({form, register, control, error, formType}){
    return (
        <div className='mb-6'>
            <Label form={form} />
            <Input form={form} control={control} formType={formType} register={register}/>
            <Errormsg err={error} form={form} />
        </div>
    )
}