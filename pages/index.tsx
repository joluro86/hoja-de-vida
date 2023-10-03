import { Menu_izquierdo } from "@/components/Menu-izquierdo";
 function Home() {
  return (
    <div className="flex flex-row">
      <Menu_izquierdo/>
      <main className="">
        soy el main
      </main>
    </div>
  )
}
export default Home;
