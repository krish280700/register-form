'use server'

import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import {getDataById, updateData, deleteData, getAllData} from '@/app/Utilities/crud'

export const GET = async (req, {params}) => {
	try {
		let data = getDataById(params.id)
		return NextResponse.json({message: "Success", data: data}, {status: 200} )
	}
	catch (err){
		return NextResponse.json(
			{message: err},{status: 500}
		)
	}
}

export const POST = async (req, {params}) => {
	let data = await req.json()
	try {
		updateData(data)
		return NextResponse.json({message: "Success", data: {...data}}, {status: 200} )
	}
	catch (err){
		return NextResponse.json(
			{message: err},{status: 500}
		)
	}
}

export const DELETE = async (req, {params}) => {
	try {
		await deleteData(params.id)
		let data = getAllData()
		return NextResponse.json({message: "Successfully Deleted", data}, {status: 200} )
	}
	catch (err){
		return NextResponse.json(
			{message: err},{status: 500}
		)
	}
}