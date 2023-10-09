import { Aside } from "@/components/Aside";
import {Conocimientos} from "@/components/Conocimientos";
import { Recuadro_principal_main } from "@/components/Recuadro_principal_main";
import { Educacion } from "@/components/Educacion";

 function Home() {
  return (
    <div className="flex flex-row">
      <Aside/>
      <main className="w-full mr-12 ml-10">
        <Recuadro_principal_main/>
        <Conocimientos/>
        <Educacion/>
      </main>
    </div>
  )
}
export default Home;
