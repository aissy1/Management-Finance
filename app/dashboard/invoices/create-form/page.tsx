import dynamic from "next/dynamic";

const Breadcrumbs = dynamic(() => import("@/app/ui/invoices/nav-form"));
const CreateForm = dynamic(() => import("@/app/ui/invoices/createform"));

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
