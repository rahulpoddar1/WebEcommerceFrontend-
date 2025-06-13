import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await api.post("/auth/login", values);

      // Save token and user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      alert("Login successful!");
      navigate("/dashboard"); // redirect to dashboard or homepage
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded bg-white">
      <h2 className="text-xl font-bold mb-6 text-center">Login</h2>
      <div className="grid grid-cols-6 gap-4">
        <div><img src="/images/image.png" width={400} height={400} alt="Login Art" className="w-full h-48 object-cover mb-6 rounded-lg" /></div>
        <div>
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <InputField
              label="Username"
              name="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              error={errors.password}
              touched={touched.password}
            />
            <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4">
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:underline mt-2 w-full text-center"
            >
              Don't have an account? Register
            </button>
          </form>
        )}
      </Formik>
        </div>
      </div>
      
     
    </div>
    </>
  );
};

export default Login;