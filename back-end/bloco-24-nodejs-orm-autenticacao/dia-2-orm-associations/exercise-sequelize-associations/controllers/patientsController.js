const { Plans, Patients, Surgeries } = require('../models');

async function getAllPatientsPlans(_req, res) {
	try {
		const patients = await Patients.findAll({ include: [{model: Plans, as: 'plans'}] });
		if(!patients.length) return res.status(404).json({ message: 'No patients found' });
		return res.status(200).json(patients);
	} catch(err) {
		console.log(err.message);
		res.status(500).json({ message: 'Internal server error' });
	}
}

async function getAllPatientsSurgeries(_req, res) {
	try {
		const patients = await Patients.findAll({ include: [{model: Surgeries, as: 'surgeries', through: { attributes: [] } }] });
		if(!patients.length) return res.status(404).json({ message: 'No patients found' });
		return res.status(200).json(patients);
	} catch(err) {
		console.log(err.message);
		res.status(500).json({ message: 'Internal server error' });
	}
}

module.exports = {
	getAllPatientsPlans,
	getAllPatientsSurgeries,
};
