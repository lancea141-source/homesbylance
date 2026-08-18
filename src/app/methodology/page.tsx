import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How the Traverse Mountain Market Report Is Built | Lance the Realtor",
  description:
    "An open look at the data, sample sizes, and confidence levels behind Lance Anderson's Traverse Mountain market reports and home value estimates.",
};

const faqs = [
  {
    q: "How many home sales does the Traverse Mountain pricing model use?",
    a: "92 resale single-family sales over the trailing 24 months, updated monthly.",
  },
  {
    q: "How accurate is the Traverse Mountain home value estimate?",
    a: "The model's median error is currently \u00B17%, which is graded as developing confidence rather than high confidence. Confidence tiers are shown for every rate in the report.",
  },
  {
    q: "How often is the Traverse Mountain market report updated?",
    a: "Every calendar month, covering the three full months ending the most recently completed month. For example, the July 2026 report covers May through July sales data.",
  },
  {
    q: "Why does the report show different $/sqft numbers for different segments instead of one average?",
    a: "Blending resale, new construction, single-family, and townhome sales into one average hides real differences. Each segment is reported separately so the number reflects what actually sells in that category.",
  },
  {
    q: "Why does the CMA Adjustment Table show different confidence levels for different features?",
    a: "The table draws from the same 92-sale pool as the pricing model, split across 11 variables \u2014 some features (like basement finish) have enough independent data to be reliable, while others (like exact bathroom count) rest on a thinner, more correlated slice. Each row is flagged accordingly rather than presented with uniform confidence.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function MethodologyPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <p className="uppercase tracking-[0.2em] text-xs font-semibold text-olive mb-2">
        Data &amp; Methodology
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-navy mb-8">
        How the Traverse Mountain Market Report Is Built
      </h1>

      <div className="space-y-10 text-navy/80 leading-relaxed">
        <div>
          <h2 className="font-display text-2xl text-navy mb-3">Data source</h2>
          <p>
            All statistics come from the Wasatch Front Regional MLS (WFRMLS/URE)
            &mdash; the same licensed-agent-only database used to close real
            transactions. Utah is a non-disclosure state, meaning sold prices are
            not part of the public record. The numbers in this report exist only
            because they come directly from MLS data, not from public records or
            third-party estimates like Zillow&apos;s Zestimate.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-navy mb-3">Update cadence</h2>
          <p>
            The report updates monthly and is anchored to complete calendar
            months, not the date it happens to be published. Each report covers
            the three full calendar months ending the most recently completed
            month &mdash; for example, the July 2026 report reflects May through
            July sales data, regardless of what day in August it was generated.
            Every past month is permanently archived and viewable.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-navy mb-3">What each number means</h2>
          <p className="mb-4">
            <strong className="text-navy">Market Index (0&ndash;100):</strong> A
            composite of five equally-weighted signals &mdash; sales velocity,
            price momentum, days on market, sale-to-list ratio, and months of
            supply. 50 is a perfectly balanced market; above 50 favors sellers,
            below favors buyers.
          </p>
          <p className="mb-4">
            <strong className="text-navy">Months of Supply:</strong> The
            industry-standard measure of how long current inventory would last
            at the current sales pace. Under 4 months signals a seller&apos;s
            market, 4&ndash;6 is balanced, over 6 favors buyers.
          </p>
          <p>
            <strong className="text-navy">$/sqft by segment:</strong> Reported
            separately for resale vs. new construction and single-family vs.
            townhome/condo, because blending them into one &quot;average&quot;
            number &mdash; the way most public sites do &mdash; hides real
            differences buyers and sellers should know about.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-navy mb-3">
            Model methodology and confidence tiers
          </h2>
          <p className="mb-4">
            The home value estimate (Pricing Model) on the report is a
            regression built on 92 resale single-family sales in Traverse
            Mountain over the trailing 24 months &mdash; roughly 15 sales for
            every variable in the model, within the standard range statisticians
            consider reliable for a model of this size. Its median error is
            currently &plusmn;7%, which we grade &quot;developing
            confidence&quot; rather than &quot;high confidence.&quot; The model
            is refit every month as new sales close.
          </p>
          <p className="mb-4">
            The more detailed CMA Adjustment Table (used for pricing individual
            features like garages, bathrooms, and basements) draws from the
            same 92-sale pool, split further by feature. With 11 variables
            drawing from that same pool, some rows average fewer than 10
            independent observations &mdash; which is why row-level confidence
            tags matter more here than a single model-wide accuracy number.
            Some rows &mdash; like square footage and basement finish, which
            apply to nearly every sale &mdash; rest on the full sample. Others
            &mdash; like exact bathroom count &mdash; rest on a thinner, more
            correlated slice of it. Each row is flagged accordingly:
          </p>
          <ul className="space-y-2 mb-2">
            <li>
              <span aria-hidden="true">&#128994;</span>{" "}
              <strong className="text-navy">High confidence</strong> &mdash;
              built on a large enough, independent-enough sample to use
              directly in pricing conversations.
            </li>
            <li>
              <span aria-hidden="true">&#128993;</span>{" "}
              <strong className="text-navy">Developing confidence</strong>{" "}
              &mdash; directionally useful, but based on a smaller or more
              correlated sample; verify against real comps before relying on it
              alone.
            </li>
            <li>
              <span aria-hidden="true">&#128308;</span>{" "}
              <strong className="text-navy">Insufficient data</strong> &mdash;
              not enough independent sales yet to isolate this factor
              reliably; shown for transparency, not for pricing.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-navy mb-3">
            Limitations, stated plainly
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The Pricing Model and CMA table apply to resale single-family
              homes only &mdash; new construction and townhomes are excluded,
              since they behave differently and would distort the fit.
            </li>
            <li>
              Months of Supply and active-listing counts always reflect{" "}
              <em>today&apos;s</em> inventory snapshot, even on an archived
              past-month report &mdash; the sheet does not retain historical
              inventory counts.
            </li>
            <li>
              A regression model is a starting point, not a substitute for a
              full Comparative Market Analysis on a specific property. We say
              this every month on the report itself.
            </li>
          </ul>
          <p className="mt-4">
            We publish these limitations because a model that hides its own
            uncertainty is less trustworthy than one that shows it &mdash; not
            more.
          </p>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-navy/10">
        <Link
          href="/realestate/market-report/traverse-mountain"
          className="text-sm font-semibold text-terracotta hover:text-navy transition-colors"
        >
          &larr; Back to the Traverse Mountain Market Report
        </Link>
      </div>
    </section>
  );
}
