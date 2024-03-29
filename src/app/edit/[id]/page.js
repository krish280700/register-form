"use client"

import Header from '@/app/Layout/header'
import Formgroup from '@/app/Components/formGroup';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {formData} from '@/app/Data/formData'
import { useEffect } from 'react';
import { useForm } from "react-hook-form";

export default function Edit({params}){
	const { register, handleSubmit, reset, watch, control, formState: { errors } } = useForm();
    const router = useRouter()
	
	useEffect(() => {
		fetch(`http://localhost:3000/api/form/${params.id}`,{method: 'GET'}).then(res => res.json())
			.then((res) => {
				reset(res.data)
			})
	}, [])
	
	const onSubmit = async (data) => {
		try {
			const formData = new FormData()
			for (const key in data) {
				if (data.hasOwnProperty(key)) {
				  formData.append(key, data[key]);
				}
			  }
			const response = await fetch(`http://localhost:3000/api/form/${params.id}`, {
			  method: 'POST',
			  headers: {
				'Content-Type': `multipart/form-data; boundary=${"--------------------------" + Date.now().toString(16)}`
			  },
			  body: formData,
			});
			
			if (!response.ok) {
			  throw new Error('Something went wrong');
			}else{
				router.push('/')
			}
	  
		  } catch (error) {
			console.error('Error:', error.message);
		}
	}

	const handleDependent = (field) => {
        console.log(field)
    }

    return (
        <>
			<Header />
			<div className='container mx-auto my-4 p-4 bg-white'>
				<form onSubmit={handleSubmit(onSubmit)} className='px-32 py-16'>
                    {
                        formData && formData.length && formData.map((form, key) => {
                            return (
                                form.formType.includes('Edit') ? <Formgroup form={form} watch={watch} handleDependent={handleDependent} control={control} error={errors} key={key} register={register} /> : ''
                            )
                        })
                    }
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                    <Link href='/' className='bg-gray-500 ml-2 hover:bg-gray-700 text-white font-bold py-2.5 px-4 rounded'>Back</Link>
				</form>
			</div>
        </>
    )
}