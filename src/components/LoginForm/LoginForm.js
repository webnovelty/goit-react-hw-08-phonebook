import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Toaster } from 'react-hot-toast';
import { Form, Label, Span, Button } from 'components/LoginForm/LoginForm.styled';


const LoginForm = () => {

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(logIn({
			email: form.elements.email.value,
			password: form.elements.password.value
		}))
	};

	return (
		<>
		
		<Form onSubmit={handleSubmit} autoComplete='off'>
			<Label>
				<Span>Email</Span>
				<input
					type='email'
					name='email'
					placeholder="Name"
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
					title="Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
					title="Password may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
				/>
			</Label>
			<Button type="submit">Log In</Button>
		</Form>
			<Toaster />
		</>
	)
};

export default LoginForm;