import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import api from "../services/api";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string().min(6).required("Password is required"),
  });

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await api.post("/auth/register", values);
      alert(res.data.message);
      window.location.href = "/login"
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-6">Register</h2>
      <div className="grid grid-cols-6 gap-4">
        <div><img src="/images/image.png" width={400} height={400} alt="Login Art" className="w-full h-48 object-cover mb-6 rounded-lg" /></div>
        <div></div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleRegister}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <InputField {...{ label: "Username", name: "username", handleChange, handleBlur, value: values.username, error: errors.username, touched: touched.username }} />
            <InputField {...{ label: "Email", name: "email", type: "email", handleChange, handleBlur, value: values.email, error: errors.email, touched: touched.email }} />
            <InputField {...{ label: "First Name", name: "firstName", handleChange, handleBlur, value: values.firstName, error: errors.firstName, touched: touched.firstName }} />
            <InputField {...{ label: "Last Name", name: "lastName", handleChange, handleBlur, value: values.lastName, error: errors.lastName, touched: touched.lastName }} />
            <div className="mb-4">
              <label className="block font-medium mb-1">Role</label>
              <select name="role" onChange={handleChange} onBlur={handleBlur} value={values.role} className={`w-full p-2 border rounded ${errors.role && touched.role ? "border-red-500" : "border-gray-300"}`}>
                <option value="">Select a role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && touched.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
            </div>
            <InputField {...{ label: "Password", name: "password", type: "password", handleChange, handleBlur, value: values.password, error: errors.password, touched: touched.password }} />
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4">
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Register;
