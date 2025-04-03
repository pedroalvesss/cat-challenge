import GatosCarrossel from "@/components/Gatos";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Image src="/dpe.png" width={200} height={200} alt="Logo da DPE" />
      </div>
      <h1 className="mt-4 gap-4 text-3xl">Núcleo de Exibição de Gatinhos</h1>

      <div id="caroseles">
        <GatosCarrossel />
      </div>
    </div>
  );
}
