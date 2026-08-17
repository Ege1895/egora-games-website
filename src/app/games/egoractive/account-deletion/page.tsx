import type { Metadata } from "next";
import { AccountDeletion } from "@/components/sections/AccountDeletion";
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Account Deletion",
  description:
    "Instructions for deleting your Egoractive account and data, as required by Google Play's Data Safety form.",
  path: "/games/egoractive/account-deletion",
});

export default function AccountDeletionPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Egoractive — Account Deletion", path: "/games/egoractive/account-deletion" },
        ])}
      />
      <AccountDeletion />
    </main>
  );
}
