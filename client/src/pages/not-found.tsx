import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground mb-6">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link href="/">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
