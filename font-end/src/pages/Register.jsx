import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Validation from "./SignUpValidation"; // Giả sử Validation là một hàm bạn đã định nghĩa
import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = Validation(values); // Giả sử Validation đã được điều chỉnh
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post('http://localhost:8081/signup', values);
                navigate('/Login');
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <Header />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Đăng kí
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                {['username', 'email', 'password'].map(field => (
                                    <div key={field}>
                                        <label htmlFor={field} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                        <input
                                            type={field === 'email' ? 'email' : field}
                                            name={field}
                                            id={field}
                                            placeholder={field === 'password' ? '••••••••' : `${field}@example.com`}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            onChange={handleInputChange}
                                            required
                                        />
                                        {errors[field] && <span className="text-danger text-white">{errors[field]}</span>}
                                    </div>
                                ))}
                                <div className="flex items-start">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-3 text-sm font-light text-gray-500 dark:text-gray-300">
                                        Tôi chấp nhận <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">thành viên ngọc rồng god</a>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/login">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
