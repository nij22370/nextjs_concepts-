import { SignInButton } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <div className="">
      <SignInButton mode="modal" />
    </div>
  );
}
