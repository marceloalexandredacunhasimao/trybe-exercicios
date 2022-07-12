module.exports = (sequelize, DataTypes) => {
	const PatientSurgeries = sequelize.define('Patient_surgeries', {},
	{
		timestamps: false,
		tableName: 'Patient_surgeries',
//		underscored: true,
	});

	PatientSurgeries.associate = (models) => {
		models.Patients.belongsToMany(models.Surgeries, {
			as: 'surgeries',
			through: PatientSurgeries,
			foreignKey: 'patient_id',
			otherKey: 'sugery_id',
		});
		models.Surgeries.belongsToMany(models.Patients, {
			as: 'patients',
			through: PatientSurgeries,
			foreignKey: 'sugery_id',
			otherKey: 'patient_id',
		});
	};
	
	return PatientSurgeries;
};
