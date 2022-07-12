const { Plans, Patients } = require('../models');

async function getAllPlans(req, res) {
	const { id } = req.params;
	try {
		const plans = await Plans.findAll({ include: [{model: Patients, as: 'patients'}], where: {plan_id: id} });
		if(!plans.length) return res.status(404).json({ message: 'No plan found' });
		return res.status(200).json(plans);
	} catch(err) {
		console.log(err.message);
		res.status(500).json({ message: 'Internal server error' });
	}
}

module.exports = {
	getAllPlans,
};
