import React from "react";
import ImpactHeader from "../components/ImpactHeader";
import ImpactDetails from "../components/ImpactDetails";
import ImpactCta from "../components/ImpactCta";
import ImpactFeedbacks from "../components/ImpactFeedbacks";
import ImpactPartner from "../components/ImpactPartner";
import ImpactFooter from "../components/ImpactFooter";

export default function Impact() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-12">
      <section className="w-full max-w-screen-xl mx-auto px-2 sm:px-4">

        <ImpactHeader />

        <ImpactDetails />

        <ImpactCta />

        <ImpactFeedbacks />

        <ImpactPartner />

        <ImpactFooter />

      </section>
    </main>
  );
}
