export interface ValidatorResult {
	[validatorName: string]: { [key: string]: any } & {
		error: boolean;
		message?: string;
	};
}

export type ValidatorFn = (value: any) => ValidatorResult;

function required(value: any): ValidatorResult {
	if (value === '' || value == null) {
		return { required: { error: true, message: 'Field is required' } };
	}
	return { required: { error: false } };
}

function validEmail(value: any): ValidatorResult {
	const emailFormat =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (value.match(emailFormat)) {
		return { validEmail: { error: false } };
	}
	return { validEmail: { error: true, message: 'Valid email is required' } };
}

function minLength(number: number) {
	return function (value: any): ValidatorResult {
		if (value == null || value.length < number) {
			return {
				minLength: {
					error: true,
					value: number,
					message: `Field minimum length is ${number}`
				}
			};
		}
		return { minLength: { error: false } };
	};
}

export const Validators = {
	required,
	validEmail,
	minLength
};
