import Members from "@/app/ui/member";
import Timeline from "@/app/ui/timeline";

export default function Page({ params }: { params: { id: string } }) {
  const memberData = [
    { name: "我", role: "網站後端", skill: "XAMPP, PHP, MySQL" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
    { name: "同學", role: "網站前端", skill: "Vue.js" },
  ];

  return <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
    <p>page {params.id}</p>

    <img src="" alt="專案主視覺" title="專案主視覺"
      className="mx-auto w-full max-w-192 aspect-video rounded-3xl bg-gray-300" />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <Members data={memberData} />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <Timeline start="2020/07" period="一個月" end="2020/08" />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>
  </section>
}