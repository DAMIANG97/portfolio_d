/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Konfiguracja dla statycznego eksportu
  trailingSlash: true, // Używaj '/' na końcu ścieżek (wymagane dla GitHub Pages)
  basePath: "/<portfolio_d>", // Zamień <nazwa-repozytorium> na nazwę swojego repo
};

module.exports = nextConfig;
