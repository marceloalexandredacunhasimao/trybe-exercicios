const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const jwtConfig = {
	expiresIn: '1h',
	algorithm: 'HS256',
};

function validateBody(body) {
	const schema = Joi.object({
		username: Joi.string().min(5).alphanum().required().messages({
		'string.min': '"username" length must be 5 characters long',
		'string.required': '"username" is required',
		}),
		password: Joi.string().min(5).required().messages({
		'string.min': '"password" length must be 5 characters long',
		'string.required': '"password" is required',
		}),
	});
	return schema.validate(body);	
}

module.exports = (req,res,next) => {
	const { error } = validateBody(req.body);
	if(error) {
		return next(error);
	}
	const { username, password } = req.body;
	if (username === 'admin' && password !== 's3nh4S3gur4???') {
		const err = new Error('Invalid username or password');
		err.statusCode = 401;
		return next(err);
	}
	const data = {
		admin: password === 's3nh4S3gur4???' && username === 'admin',
		username
	};
	const token = jwt.sign(data, JWT_SECRET, jwtConfig);
	res.status(200).json({ token });
};
