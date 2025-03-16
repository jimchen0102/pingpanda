/** @type {import('next').NextConfig} */
const CORS_HEADERS = [
  {
    key: "Access-Control-Allow-Credentials",
    value: "true",
  },
  {
    key: "Access-Control-Allow-Origin",
    value: "*",
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET, DELETE, PATCH, POST, PUT",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "*",
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path",
        headers: CORS_HEADERS,
      },
    ]
  },
}

export default nextConfig
