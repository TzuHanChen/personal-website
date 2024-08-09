export default function Page({ params }: { params: { id: string } }) {
  return <div className="py-24 px-6 flex flex-col gap-6 md:px-24 lg:py-36 lg:px-12">
    <p>page {params.id}</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at facilis ab voluptatum dolor repudiandae itaque? Autem, ipsam beatae incidunt aliquid mollitia sed laudantium illo quod dignissimos quas reprehenderit reiciendis!</p>
  </div>
}