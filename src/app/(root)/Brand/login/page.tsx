"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

function page() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  let ele ;
  const handleInput = (e: any) => {
    ele = e.target;
    // console.log(ele.category);
    setData({
      ...data,
      [ele.name]: ele.value
    })
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/brand/signin`, data);
      if(response.status === 201){
        setData({
          email: "",
          password: ""
        })
        const res = await response;
        console.log(res);
        
        localStorage.setItem('jwtToken',res.data.token);
        router.push("/Brand/profile");
      }
    } catch (error) {
      console.error("Some Error In Fetch",error);
    }
  };
  return (
    <div className="w-screen mt-32 mb-20 flex justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Welcome to <span>PROMOTIONLINK</span>
        </h2>
        <p className="text-md font-semibold max-w-sm mt-2 text-violet-700">
            Login As A BRAND
        </p>
        <p className="text-sm font-semibold max-w-sm mt-5 text-neutral-600">
            star(*) marked fields are mandatory to fill
        </p>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col items-end md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
                <Label htmlFor="email">Email*</Label>
                <Input name="email" onChange={handleInput} value={data.email} id="email" placeholder="email" type="email" />
            </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input name="password" onChange={handleInput} value={data.password} id="password" placeholder="••• •••" type="password" />
            </LabelInputContainer>
            <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            >
            Login &rarr;
            <BottomGradient />
            </button>
          </form>
      </div>
    </div>
  )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-violet-700 to-transparent" />
      </>
    );
};
const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
};

export default page
