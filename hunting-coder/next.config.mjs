/*

 @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    unoptimized: true
}
};
/* module.exports = nextConfig*/
export default nextConfig;
