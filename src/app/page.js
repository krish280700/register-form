'use client'

import Header from '@/app/Layout/header'
import Formgroup from './Components/formGroup';
import {formData} from '@/app/Data/formData'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

export default function Home() {
	const [formVal, setFormVal] = useState({})
	const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
	
	const onSubmit = data => console.log(errors);

	const handleChange = (e) => {
		setFormVal({...formVal, [e.target.name]: e.target.value})
	}

	useEffect(()=> {
		formData && formData.length && formData.map((form) => {
			setFormVal({[form.name]: form.value})
		})
	}, [])
    return (
		<>
			<Header />
			<div className='container mx-auto my-4 p-4 bg-white'>
				<form onSubmit={handleSubmit(onSubmit)} className='px-32 py-16'>
					{
						formData && formData.length && formData.map((form, key) => {
							return <Formgroup form={form} control={control} error={errors} key={key} formval={formVal} register={register} handleChange={handleChange} />
						})
					}
					<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
				</form>
			</div>
		</>
    );
}
