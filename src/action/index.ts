"use server"

import { signIn, signOut } from "@/auth";

export async function signInSocialAction(formData: FormData) {
  const action: any = formData.get('action');
  await signIn(action, {redirectTo: "/profile"})
}

export async function signOutAction() {
  await signOut({redirectTo: "/"})
}