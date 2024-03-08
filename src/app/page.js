'use client'

import Header from '@/app/Layout/header'
import Formgroup from './Components/formGroup';
import {formData} from '@/app/Data/formData'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";


export default function Home() {
	
	// const [formVal, setFormVal] = useState({})
	const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
	
	// const onSubmit = async (data) => {
		
	// 	try {
	// 		const response = await fetch('/Pages/api/form', {
	// 		  method: 'POST',
	// 		  headers: {
	// 			'Content-Type': 'application/json',
	// 		  },
	// 		  body: JSON.stringify(data),
	// 		});
	  
	// 		if (!response.ok) {
	// 		  throw new Error('Something went wrong');
	// 		}
	  
	// 		// Handle successful response, if needed
	// 	  } catch (error) {
	// 		console.error('Error:', error.message);
	// 	}
	// }

    return (
		<>
			<Header />
			<div className='container mx-auto my-4 p-4 bg-white'>
				<form onSubmit={handleSubmit(onSubmit)} className='px-32 py-16'>
					{
						formData && formData.length && formData.map((form, key) => {
							return <Formgroup form={form} watch={watch} control={control} error={errors} key={key} register={register} />
						})
					}
					<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
				</form>
			</div>
		</>
    );
}
