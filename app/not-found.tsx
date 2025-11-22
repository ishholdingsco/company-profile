import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background w-full flex flex-col">
      <Header />
      <main className="w-full flex-1 flex items-center justify-center px-12">
        <div className="w-full max-w-2xl text-center space-y-8">
          {/* 404 Number */}
          <div className="space-y-4">
            <div className="w-full border-t-2 border-foreground" />
            <h1 className="text-9xl font-bold">404</h1>
            <div className="w-full border-t-2 border-foreground" />
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p className="text-lg text-muted-foreground">
              Oops! The page you are looking for does not exist or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="/"
              className="px-8 py-3 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-all border-2 border-foreground w-full sm:w-auto text-center"
            >
              Back to Home
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3 border-2 border-foreground font-bold rounded-lg hover:bg-foreground hover:text-background transition-all w-full sm:w-auto text-center"
            >
              View Solutions
            </Link>
          </div>

          {/* Additional Info */}
          <div className="pt-8">
            <div className="p-6 border-2 border-foreground rounded-lg bg-muted/30">
              <h3 className="font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                If you believe this is an error, please contact us or navigate back to the homepage.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
