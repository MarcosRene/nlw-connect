import { ArrowRight, Copy, Mail } from "lucide-react" 
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputControl, InputPrefix, InputRoot } from "@/components/input";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight /> 
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot> 
          <InputControl placeholder="Digite seu email" />
          <InputPrefix>
            <Mail className="size-5" />
          </InputPrefix>
        </InputRoot>

        <InputRoot error> 
          <InputPrefix>
            <Mail />
          </InputPrefix>
          <InputControl placeholder="Digite seu email" />
        </InputRoot>
      </div>
    </main>
  );
}
