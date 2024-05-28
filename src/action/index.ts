"use server"

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signInSocialAction(formData: FormData) {
  // const action: any = formData.get('action');
  // await signIn(action, {redirectTo: "/profile"})
  await signIn();
  redirect('/profile')
}

export async function signOutAction() {
  await signOut({redirectTo: "/"})
}