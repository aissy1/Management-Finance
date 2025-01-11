import dynamic from "next/dynamic";
import { fetchInvoicesByID } from "@/app/lib/data";

const EditForm = dynamic(() => import("@/app/ui/invoices/edit-form"));
const Breadcrumbs = dynamic(() => import("@/app/ui/invoices/nav-form"));

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
