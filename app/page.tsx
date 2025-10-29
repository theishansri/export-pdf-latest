"use client";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center px-6 py-10 overflow-y-auto">
      <div className="max-w-5xl text-gray-800 space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          PDF Generation Evaluation
        </h1>
        <p>
          We evaluated three approaches available for generating PDFs in Classic
          Sphere and server-side rendering contexts:
        </p>
        <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Feature</th>
              <th className="border border-gray-300 px-4 py-2">React PDF</th>
              <th className="border border-gray-300 px-4 py-2">
                Print Manager
              </th>
              <th className="border border-gray-300 px-4 py-2">PDFKit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Chart/Canvas Support
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ❌ Limited support. Requires converting charts to images.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Fully supported. Uses native browser rendering.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ⚙️ Supported via node-canvas or image embedding. Charts must be
                pre-rendered as images (PNG/SVG).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                HTML/CSS Rendering
              </td>
              <td className="border border-gray-300 px-4 py-2">
                📉 Harder to style. Requires custom layout syntax instead of
                HTML/CSS.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Easy to style. Uses regular HTML and CSS.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ❌ No HTML/CSS support. Layouts must be drawn manually via
                coordinates.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Accessibility
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ♿ No built-in support for semantic tags or ARIA.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ✅ Preserves basic accessibility if the source document is
                accessible.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                🚫 No native accessibility tagging. Primarily output-focused.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Library Size</td>
              <td className="border border-gray-300 px-4 py-2">
                📄 React PDF: ~1.2 MB (minified), ~300 KB (gzipped)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                📄 No additional library required. Uses browser's print feature.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                📦 PDFKit: ~500 KB (minified), ~150 KB (gzipped). Server-side
                only.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Dependencies</td>
              <td className="border border-gray-300 px-4 py-2">
                Requires <code>@react-pdf/renderer</code> and optionally{" "}
                <code>html2canvas</code>.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                No external dependencies. Uses <code>window.print()</code>.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Requires <code>pdfkit</code>, and optionally{" "}
                <code>chartjs-node-canvas</code> or <code>pdf-lib</code> for
                merging/manipulating PDFs.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Performance</td>
              <td className="border border-gray-300 px-4 py-2">
                ⚡ Moderate. Rendering happens client-side in React.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ⚡ Fast for small documents but may lag for large tables/charts.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                🚀 Excellent for server-side batch generation and automation.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Use Case</td>
              <td className="border border-gray-300 px-4 py-2">
                Suitable for simple PDFs rendered directly from React UIs.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Best for user-triggered reports directly printable from browser.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Ideal for server-generated PDFs, invoices, and automated reports
                where layout precision is required.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-sm text-gray-600 mt-4">
          <strong>Note:</strong> For heavier data (e.g., large tables or many
          charts), both client-side solutions (React PDF and Print Manager) may
          perform slowly. PDFKit is recommended for backend rendering of
          high-volume or data-rich PDFs.
        </p>

        <h2 className="text-xl font-semibold mt-6">Recommendation for MVP</h2>
        <p>
          For the MVP, continue with <strong>Print Manager</strong> — it offers
          simplicity, zero dependencies, and full fidelity with existing
          HTML/CSS.
        </p>
        <p>
          For automated report generation or large-scale exports, plan a
          <strong> server-side PDFKit</strong> integration in the next phase,
          possibly combined with <code>chartjs-node-canvas</code> or{" "}
          <code>pdf-lib</code> for enhanced charting and merging features.
        </p>
      </div>
    </div>
  );
}
