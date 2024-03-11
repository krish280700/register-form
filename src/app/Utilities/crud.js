import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./public/data.json');

function readData() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

function getAllData() {
	const datas = readData();
	return datas;
}

function getDataById(dynamicId) {
	const datas = readData();
	return datas.find(data => data.id == dynamicId);
}

function createData(newdata) {
	const datas = readData();
	newdata.id = datas.length + 1;
	datas.push(newdata);
	writeData(datas);
	return newdata;
}



function updateData(updateddata) {
	const datas = readData();
	const index = datas.findIndex(data => data.id == updateddata.id);
	if (index !== -1) {
		datas[index] = updateddata;
		writeData(datas);
		return true;
	}
	return false;
}

function deleteData(id) {
	const datas = readData();
	const updatedatas = datas.filter(data => data.id != id);
	if (updatedatas.length < datas.length) {
		writeData(updatedatas);
		return true;
	}
	return false;
}

module.exports = {
	getAllData,
	getDataById,
	createData,
	updateData,
	deleteData,
};


