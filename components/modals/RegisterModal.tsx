"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import useRegisterModal from "@/hooks/useRegisterModal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  // on submit form
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <Dialog open={registerModal.isOpen} onOpenChange={registerModal.onClose}>
      <DialogContent className="sm:max-w-[350px]">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Register</DialogTitle>
            <DialogDescription className="text-sm">
              You are few steps away from finding your next vacation stay.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <div>
              <Label>Full Name</Label>
              <Input
                {...register("fullname", { required: true })}
                type="text"
                placeholder="Enter Full Name"
                name="fullname"
              />

              {errors.fullname && (
                <p className="text-sm text-rose-400 text-muted-foreground">
                  Fullname is required
                </p>
              )}
            </div>
            <div>
              <Label>Email</Label>
              <Input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                type="text"
                placeholder="Enter Email"
                name="email"
              />
              {errors.email && (
                <p className="text-sm text-rose-400 text-muted-foreground">
                  {errors.email.type == "required" && "Email is required"}
                  {errors.email.type == "pattern" && "Email is invalid"}
                </p>
              )}
            </div>
            <div>
              <Label>Password</Label>
              <Input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Password"
                name="password"
              />
              {errors.password && (
                <p className="text-sm text-rose-400 text-muted-foreground">
                  password is required
                </p>
              )}
            </div>
            <div className="w-full mt-2">
              <Button
                type="submit"
                className="
              w-full 
              bg-purple-500 
              text-white
              hover:bg-purple-700
              "
              >
                Register
              </Button>
            </div>
          </div>
          <DialogFooter>
            <div className="max-w-[230px] mt-2 text-sm text-center mx-auto">
              <DialogDescription>
                If you already have an account please login
              </DialogDescription>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
