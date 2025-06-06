import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Email Address <sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full rounded-[0.5rem] bg-white border border-gray-300 p-[12px] text-black outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
      </label>

      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
          Password <sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full rounded-[0.5rem] bg-white border border-gray-300 p-[12px] pr-12 text-black outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#888" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#888" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-yellow-600 hover:underline">
            Forgot Password
          </p>
        </Link>
      </label>

      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-400 hover:bg-yellow-500 py-[12px] px-[12px] font-semibold text-black text-lg shadow transition"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm