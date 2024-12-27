import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import {AppleIcon, Fingerprint } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  
  function handleSubmit() {
    navigate("/dashboard");
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen py-12", // Centralização vertical e padding
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md mx-auto"> {/* Largura total em mobile, max-width em desktop */}
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Bem vindo ao Inventiva Apps</CardTitle>
          <CardDescription>
            Logue-se com sua conta Apple ou Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  {/* Icone Apple */}
                 <AppleIcon className="w-6 h-6" />
                  Login com Apple
                </Button>
                <Button variant="outline" className="w-full">
                  {/* Icone Google */}
                  <Fingerprint className="w-6 h-6" />
                  Login with Google
                </Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                 Ou continue com 
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu sua senha?
                    </a>
                  </div>
                  <Input id="password" name="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Não possui uma conta?{" "}
                <a href="#" className="underline underline-offset-4">
                  Registre-se
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary mt-6"> {/* Margem superior */}
        Ao clicar em continuar você aceita os <a href="#">Termos de Serviço</a> e <a href="#">Politica de privacidade</a>.
      </div>
    </div>
  );
}