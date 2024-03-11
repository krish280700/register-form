import { NextResponse } from 'next/server'
import {getAllData, createData} from '@/app/Utilities/crud'

export const POST = async (req, res) => {
	let data = await req.json()
	try {
    	let newdata = createData(data)
		return NextResponse.json({message: "Success", data: req.body}, {status: 200} )
	}
	catch(err){
		return NextResponse.json(
			{message: err},{status: 500}
		)
	}
}

export const GET = async (req, res) => {
	try {
		let data = getAllData()
		return NextResponse.json({message: "Success", data: data}, {status: 200} )
	}
	catch (err){
		return NextResponse.json(
			{message: err},{status: 500}
		)
	}
}