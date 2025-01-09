import Breadcrumbs from "@/app/ui/invoices/nav-form";
import CreateForm from "@/app/ui/invoices/createform";

export default async function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateForm />
    </div>
  );
}
