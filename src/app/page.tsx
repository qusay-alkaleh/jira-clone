import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="m-3 flex gap-1">
      <Button disabled variant="primary">
        Primary
      </Button>
      <Button disabled variant="destructive">
        Destructive
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="muted">
        Muted
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="teritary">
        Teritary
      </Button>
    </div>
  );
}
