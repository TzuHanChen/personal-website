function Item({ data }: { data: string }) {
  // let icon = <></>
  let text = '';
  switch (data) {
    case "uxr":
      // icon = <DocumentIcon className="size-6 stroke-white" />
      text = "使用者訪談";
      break;
  }

  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-lg md:text-xl lg:text-2xl">{text}</p>
    </div>
  )
}

export default function Output({ items }: { items: string[] }) {

  return (
    <div className="mx-auto">
      <h2 className="mb-6 text-2xl text-gray-900 text-center md:mb-9 md:text-3xl lg:text-4xl">
        產出</h2>
      {items.map((data, index) => {
        return <Item data={data} key={index} />
      })}
    </div>
  )
}