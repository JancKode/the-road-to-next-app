import { Link } from "lucide-react";
import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button variant="outline">
          <Link href="/tickets" className="text-sm underline">
            Go to Tickets
          </Link>
        </Button>
      }
    />
  );
}
