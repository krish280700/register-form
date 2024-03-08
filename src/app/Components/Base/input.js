import { Controller } from 'react-hook-form';
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Input({form, register, control}){
    const {type, label, placeholder, name, options, validations} = form
    switch (type) {
        case 'radio':
        case 'checkbox':
            return options && options.length && options.map((option) =>{
                    return <>
                        <div className='flex'>
                            <input 
                                {...register(name)}
                                type={type} 
                                id={option.id} 
                                name={name} 
                                value={option.value} 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                /> 
                            <label htmlFor={option.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">
                                {option.name} 
                            </label>
                        </div>
                    </>
            } )
       
        case 'date':
            return <>
                        <Controller
                            control={control}
                            name="Datepicker"
                            render={({field : {onChange, onBlur, value, ref}}) => (
                                <Datepicker 
                                        onChange={(e) => onChange(e)}
                                        shouldCloseOnSelect
                                        placeholderText={placeholder}
                                        maxDate={new Date()}
                                        selected={value ? value : ''}
                                        showYearDropdown
                                        className='border rounded px-2 h-10 border-gray-600 border-radius text-gray-800' 
                                        />
                            )}
                        />
                    </>
        case 'textarea':
            return <textarea className='block p-2 h-40 text-sm font-medium rounded w-full border border-gray-600 text-gray-900' placeholder={placeholder} id={name} ></textarea>
        case 'file':
            return (
                <>    
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop your resume</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
                            </div>
                            <input id="dropzone-file" {...register(name)} type="file" accept="application/pdf,application/vnd.ms-excel" className="hidden" />
                        </label>
                    </div> 
                </>
            )
        default:
            return <input className='block px-2 h-10 text-sm font-medium rounded w-full border border-gray-600 text-gray-900' {...register(name, { ...validations})} name={name} placeholder={placeholder} type={type} />
    }        
}