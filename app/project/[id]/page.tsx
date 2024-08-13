import Members from "@/app/ui/member";

export default function Page({ params }: { params: { id: string } }) {
  return <section className="py-24 px-6 flex flex-col gap-12 md:px-24 md:gap-16 lg:flex-1 lg:py-36 lg:px-12 lg:gap-24 xl:px-24">
    <p>page {params.id}</p>

    <img src="" alt="專案主視覺" title="專案主視覺"
      className="mx-auto w-full max-w-192 aspect-video rounded-3xl bg-gray-300" />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <Members />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>
  </section>
}