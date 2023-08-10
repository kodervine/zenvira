// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function DashboardPage() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </section>

      <section className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div>chart one</div>
        <div>chart two</div>
        <div>chart three</div>
        <div>map 1</div>

        <article className="col-span-12 xl:col-span-8">
          <div>Table 1 </div>
        </article>
        <div>chart card</div>
      </section>
    </>
  );
}
