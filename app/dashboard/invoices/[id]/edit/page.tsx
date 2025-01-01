import Breadcrumbs from "@/app/ui/invoices/nav-form";
import EditForm from "@/app/ui/invoices/edit-form";
import { fetchInvoicesByID } from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const invoice = await fetchInvoicesByID(id);

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm invoice={invoice} />
    </div>
  );
}
