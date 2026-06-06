type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  image?: string;
};

export function SEO({
  title: _title,
  description: _description,
  keywords: _keywords,
  canonical: _canonical,
  image: _image = "https://www.greexaprimetech.com/og-image.png",
}: SEOProps) {
  return null;
}
