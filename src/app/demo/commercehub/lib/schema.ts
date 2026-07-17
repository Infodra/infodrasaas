export function commerceHubStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CommerceHub Demo",
    url: "https://saas.infodra.com/demo/commercehub",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://saas.infodra.com/demo/commercehub/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}
