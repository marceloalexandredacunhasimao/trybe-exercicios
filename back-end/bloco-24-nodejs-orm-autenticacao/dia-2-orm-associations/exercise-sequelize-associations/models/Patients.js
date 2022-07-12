module.exports = (sequelize, DataTypes) => {
	const Patients = sequelize.define('Patients', {
		patient_id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
		fullname: DataTypes.STRING,
		plan_id: { foreignKey: true, type: DataTypes.INTEGER },
	},
	{
		timestamps: false,
		tableName: 'Patients',
		underscored: true,
	});

	Patients.associate = (models) => {
		Patients.belongsTo(models.Plans, {
			foreignKey: 'plan_id', as: 'plans'
		});
	};
	
	return Patients;
};
