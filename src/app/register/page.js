"use client"

import Header from '@/app/Layout/header'
import Formgroup from '@/app/Components/formGroup';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {formData} from '@/app/Data/formData'
import { useForm } from "react-hook-form";

export default function Register(){

	const { register,getValues,setValue, handleSubmit, watch, control, formState: { errors } } = useForm();
	const [countryOpt, setCountryOpt] = useState([])
	const [render, setRender] = useState(true)
	const router = useRouter()

	var headers = new Headers()
	headers.append("X-CSCAPI-KEY", "ZXIzbnN1SFFQUm5CQVFCeHVIekpYN0xtRVJIVXZVOE45T1M0Z1hnVA==");

	var requestOptions = {
		method: 'GET',
		headers: headers,
		redirect: 'follow'
	};

	useEffect(() => {
		fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
			.then(response => response.json())
			.then(result => setCountryOpt(result))
			.catch(error => console.log('error', error));
		
	}, [])

	const onSubmit = async (data) => {
		try {
			const response = await fetch('/api/form', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(data),
			});
	  
			if (!response.ok) {
			  throw new Error('Something went wrong');
			}else{
				router.push('/')
			}
	  
			// Handle successful response, if needed
		  } catch (error) {
			console.error('Error:', error.message);
		}
	}

	const handleDependent = (field, value) => {
		console.log(field, value)
		let country = getValues('country')
		let forms = formData.filter(form => field.dependents.includes(form.name))
		
		if(field.name == 'country'){
			let index = formData.indexOf(formData.name == 'state');
			fetch(`https://api.countrystatecity.in/v1/countries/${value.iso2}/states`, requestOptions)
			.then(response => response.json())
			.then(result => {
				forms[0].options = result
				forms[0].isDependent = false
				if (index !== -1) {
					formData.splice(index, 1, forms[0]);
				}
				setRender(!render)
			})
			.catch(error => console.log('error', error));
		}
		else if(field.name == 'state'){
			let index = formData.indexOf(formData.name == 'city');
			fetch(`https://api.countrystatecity.in/v1/countries/${country.iso2}/states/${value.iso2}/cities`, requestOptions)
			.then(response => response.json())
			.then(result => {
				forms[0].options = result
				forms[0].isDependent = false
				if (index !== -1) {
					formData.splice(index, 1, forms[0]);
				}
				setRender(!render)
			})
			.catch(error => console.log('error', error));

		}else if(field.name == 'city'){
			let index = formData.indexOf(formData.name == 'city');
			fetch(`https://api.countrystatecity.in/v1/countries/${country.iso2}/states/${value.iso2}/cities`, requestOptions)
			.then(response => response.json())
			.then(result => {
				forms[0].options = result.lenght ? result : []
				forms[0].isDependent = false
				if (index !== -1) {
					formData.splice(index, 1, forms[0]);
				}
				setRender(!render)
			})
			.catch(error => console.log('error', error));
		}
    }

    return (
        <>
			<Header />
			<div className='container mx-auto my-4 p-4 bg-white'>
				<form onSubmit={handleSubmit(onSubmit)} className='px-32 py-16'>
						{
							formData && formData.length && formData.map((form, key) => {
								return <Formgroup form={form} countryOpt={countryOpt} handleDependent={handleDependent} getValue={getValues} setValue={setValue} watch={watch} control={control} error={errors} key={key} register={register} />
							})
						}
						<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
						<Link href='/' className='bg-gray-500 ml-2 hover:bg-gray-700 text-white font-bold py-2.5 px-4 rounded'>Back</Link>
					</form>
			</div>
        </>
    )
}