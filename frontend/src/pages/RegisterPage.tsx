import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

export default function RegisterPage() {
  return (
    <AuthLayout>

      <h1 className="text-4xl font-bold">
        Create Account
      </h1>

      <p className="mt-2 text-zinc-400">
        Let's build your AI fitness coach.
      </p>

      <div className="mt-8 space-y-5">

        <Input
          label="Full Name"
          placeholder="Aritra Dey"
        />

        <Input
          label="Email"
          placeholder="you@example.com"
          type="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
        />

        <Button>
          Continue
        </Button>

      </div>

    </AuthLayout>
  );
}