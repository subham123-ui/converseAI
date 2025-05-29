"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      { name, email, password },
      {
        onSuccess: () => {
          //redirect to the dashboard or sign in page
          window.alert("User created successfully, please sign in.");
        },
        onError: () => {
          // display the error message
          window.alert("Something went wrong, please try again.");
        },
      }
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-y-4">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button onClick={onSubmit}>Create User</Button>
    </div>
  );
};

export default Home;
