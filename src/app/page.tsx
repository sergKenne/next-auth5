import { signInSocialAction } from "@/action";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <form action={signInSocialAction}>
        <div className="card">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="card__title">Sign In</h1>
          <p className="card__desc">Select a method to sign in to your account</p>
          <button className="card__btn" name="action" value="google">Sign in with Google</button>
          <button className="card__btn" name="action" value="github">Sign in with Github</button>
          <div className="card__divider"></div>
          <div className="card__input-item">
            <label className="card__label" htmlFor="email">Email</label>
            <input className="card__input" id="email" value={""} type="text" placeholder="m@example.com"/>
          </div>
          <button className="card__btn">Sign in with Email</button>
          <div className="card__divider"></div>
          <div className="card__input-item">
            <label className="card__label" htmlFor="email">Email</label>
            <input className="card__input" id="email" value={""} type="text" placeholder="m@example.com" />
          </div>
          <div className="card__input-item">
            <label className="card__label" htmlFor="password">Password</label>
            <input className="card__input" id="password" value={""} type="text" placeholder="m@example.com" />
          </div>
          <button className="card__btn">Sign in with Credential</button>
          <p className="card__info">Don't have an account? <Link href={'/sign-up'}>Sign Up</Link> </p>
        </div>
      </form>
    </div>
  );
}
