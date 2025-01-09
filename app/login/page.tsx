import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-secondary">
      <div className=" mx-auto flex w-full max-w-[400px] rounded-md flex-col space-y-2.5 p-4 backdrop-blur-sm bg-black/30">
        <LoginForm />
      </div>
    </main>
  );
}
