'use client'

import Link from 'next/link';
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/16/solid'
import Header from '@/app/Layout/header'
import { useState, useEffect } from 'react';

export default function Home() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('/api/form', {method: 'GET'})
			.then((res) => {
				return res.json()
			}).then((res) => {
				setData(res.data)
			})
	}, [])

	const handleDelete = (id) => {
		fetch(`http://localhost:3000/api/form/${id}`, {method: 'DELETE'}).then(res => res.json())
			.then(res => {
				setData(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}
	
    return (
		<>
			<Header />
			<div className='container mx-auto my-4 p-4 bg-white'>
				<h1 className='text-black'>Welcome to Register site</h1>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400'>
						<tr>
							<th className='px-6 py-3'>ID</th>
							<th className='px-6 py-3'>First Name</th>
							<th className='px-6 py-3'>Last Name</th>
							<th className='px-6 py-3'>Email</th>
							<th className='px-6 py-3'>Contact</th>
							<th className='px-6 py-3'>DOB</th>
							<th className='px-6 py-3'>Gender</th>
							<th className='px-6 py-3'>Skill</th>
							<th className='px-6 py-3'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							data && data.length && data.map((item) => {
								return (
									<tr key={item.id} className='odd:dark:bg-gray-900 even:dark:bg-gray-800 border-b dark:border-gray-700'>
										<td className='px-6 py-4'>{item.id}</td>
										<td className='px-6 py-4'>{item.fName}</td>
										<td className='px-6 py-4'>{item.lName}</td>
										<td className='px-6 py-4'>{item.email}</td>
										<td className='px-6 py-4'>{item.contact}</td>
										<td className='px-6 py-4'>{item.Datepicker}</td>
										<td className='px-6 py-4'>{item.gender}</td>
										<td className='px-6 py-4'>{item.skills}</td>
										<td className='px-6 py-4 flex'>
											<Link href={`/edit/${item.id}`}><PencilSquareIcon className='h-5 cursor-pointer'/></Link>
											<TrashIcon className='h-5 ml-2 cursor-pointer' onClick={() => handleDelete(item.id)}/>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		</>
    );
}
