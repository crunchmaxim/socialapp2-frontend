import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logo192.png';
import { Field, reduxForm } from 'redux-form';
import isEmail from 'validator/lib/isEmail';

const SignUpForm = (props) => {
    const { handleSubmit } = props;
    return (
        <div className='signup-wrapper'>
            <form onSubmit={handleSubmit}>
                <img src={logo} />
                <h5>Уже есть аккаунт? Войдите <Link to='/login'>здесь</Link>.</h5>
                <div class="form-group">
                    <label for="usernameInput">Имя пользователя:</label>
                    <Field name="username" component={Input} validate={requiredValidator} type="text" class="form-control" id="usernameInput"/>
                </div>
                <div class="form-group">
                    <label for="emailInput">Email:</label>
                    <Field name="email" component={Input} validate={[requiredValidator, emailValidator]} type="text" class="form-control" id="emailInput"/>
                </div>
                <div class="form-group">
                    <label for="passwordInput">Пароль:</label>
                    <Field name="password" component={Input} validate={requiredValidator} type="password" class="form-control" id="passwordInput"/>
                </div>
                <div class="form-group">
                    <label for="confirmPasswordInput">Повторите пароль:</label>
                    <Field name="confirmPassword" component={Input} validate={requiredValidator} type="password" class="form-control" id="confirmPasswordInput"/>
                </div>
                <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
            </form>
        </div>
    )
};

// Input component
const Input = (props) => {
    return (
        <div className="form-group">
            <input {...props.input} {...props}/>
            {props.meta.touched && props.meta.error ? <div>{props.meta.error}</div> : ''}
      </div>
    )
}

// validators
const requiredValidator = (value) => {
    if (!value || value === '') {
        return 'Это поле необходимо';
    }
    return;
}

const emailValidator = (value) => {
    if (!isEmail(value)) {
        return 'Введите корректный email'
    }
    return;
}

export default reduxForm({ form: 'signup' })(SignUpForm);