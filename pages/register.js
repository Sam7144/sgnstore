import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { getError } from "@/utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
function LoginScreen() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const submitHandeler = async ({ email, name,password }) => {
    try {
        await axios.post('/api/auth/signup',{
            email,password,name
        })
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="mtop wrapper px-3">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandeler)}
      >
        <h1 className="mb-4 text-xl">Create New account</h1>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="w-full"
            id="name"
            {...register("name", {
              required: "Please enter name"
            })}
            autoFocus
          ></input>
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="w-full"
            id="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="w-full"
            id="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 5, message: "password is more than 8 chars" },
            })}
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmpassword">ConfirmPassword</label>
          <input
            type="password"
            className="w-full"
            id="confirmpassword"
            {...register("confirmPassword", {
              required: "Please enter password to confirm",
              validate:(value)=>value===getValues('password'),
              minLength: { value: 5, message: "password is more than 8 chars" },
            })}
          ></input>
          {errors.confirmPassword && (
            <div className="text-red-500 ">{errors.confirmPassword.message}</div>
          )}
           {errors.confirmPassword &&errors.confirmPassword.type==='validate'&&(
            <div className="text-red-500 ">password do not match</div>
          )}
        </div>
        <div className="mb-4 ">
          <button className="primary-button">Register</button>
        </div>
        <div className="mb-4 text-blue-500 ">
          Don&apos;t have an account? &nbsp; Register
           <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link> 
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
