import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { Form, Label, Span, Button } from './RegisterForm.styled';

const RegisterForm = () => {

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value
			})
		);
		form.reset();
	};

	return(
		<Form onSubmit={handleSubmit} autoComplete='off'>
			<Label>
				<Span>Username</Span>
				<input
					type="text"
					name="name"
					placeholder="Name"
					pattern="[A-Za-z]{7,}"
					title="Minimum 7 symbols and only letters pls"
					required
				/>
			</Label>
			<Label>
				<Span>Email</Span>
				<input
					type='email'
					name='email'
					placeholder="Email"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</Label>
			<Label>
				<Span>Password</Span>
				<input
					type='password'
					name='password'
					placeholder="Password"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</Label>
			<Button type='submit'>Register</Button>
		</Form>
	);
};

export default RegisterForm;
