import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Define the interface for the GitHub provider credentials
interface GithubCredentials {
  clientId: string;
  clientSecret: string;
}

// Function to get GitHub credentials from environment variables
const getGithubCredentials = (): GithubCredentials => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("GitHub client ID or client secret is missing.");
  }

  return { clientId, clientSecret };
};

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: getGithubCredentials().clientId,
      clientSecret: getGithubCredentials().clientSecret,
    }),
  ],
};
export default NextAuth(authOptions);
