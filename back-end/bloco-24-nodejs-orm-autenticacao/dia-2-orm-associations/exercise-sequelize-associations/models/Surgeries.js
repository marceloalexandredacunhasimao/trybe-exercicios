module.exports = (sequelize, DataTypes) => {
	const Surgeries = sequelize.define('Surgeries', {
		surgery_id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
		specialty: DataTypes.STRING,
		doctor: DataTypes.STRING,
	},
	{
		timestamps: false,
		tableName: 'Surgeries',
		underscored: true,
	});

	return Surgeries;
};
