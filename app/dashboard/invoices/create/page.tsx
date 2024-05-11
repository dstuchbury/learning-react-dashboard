import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";


export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                { label: 'Invoicces', href: '/dashboard/invoices' },
                {
                    label: 'Create Invocie',
                    href: '/dashboard/invoices/create',
                    active: true,
                },
                ]}
            />
            <Form customers={customers}
            />
        </main>
    );
}
