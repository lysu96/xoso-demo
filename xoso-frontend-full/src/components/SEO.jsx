import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    <title>Kết quả xổ số Miền Bắc hôm nay - Xổ Số Nhanh</title>
    <meta name="description" content="Xem kết quả xổ số Miền Bắc hôm nay nhanh nhất, chính xác nhất. Có thống kê, phân tích, và soi cầu miễn phí." />
    <meta name="keywords" content="xổ số miền bắc, kqxs, kết quả xổ số hôm nay, xsmb, xổ số nhanh" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Xổ Số Nhanh",
        "url": "https://xosonhanh.vn",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://xosonhanh.vn/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}</script>
  </Helmet>
);
export default SEO;