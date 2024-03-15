import Label from './Base/label'
import Input from './Base/input'
import Errormsg from './Base/errorMsg'


export default function Formgroup({form, register, control, error, formType, countryOpt, ...props}){

    return (
        !form.isDependent ?
        <div className={`mb-6`}>
            <Label form={form} />
            <Input form={form} handleDependent={props.handleDependent} getValue={props.getValue} setValue={props.setValue} control={control} countryOpt={countryOpt} formType={formType} register={register}/>
            <Errormsg err={error} form={form} />
        </div>
        : ''
    )
}