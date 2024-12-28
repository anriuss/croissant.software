import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./_components/ui/card";

export default function HomePage() {
  return (
    <main className="pt-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-primary">What do we do?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We launch our own products like Frag and Curespy. On top of that, we
          offer development consultation services for startups and businesses.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Our Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="https://frag.bio"
            className="transition-transform duration-500 hover:scale-105"
          >
            <Card className="h-full hover:border-primary">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Frag.bio</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                A bio link created for gamers to share their social media in
                their bio.
              </CardContent>
            </Card>
          </Link>

          <Link
            href="https://cure-spy.vercel.app"
            className="transition-transform duration-500 hover:scale-105"
          >
            <Card className="h-full hover:border-primary">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Curespy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                An AI-based project that tracks clinical trials and updates the
                patient.
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-bold text-primary">Company Information</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Legal company name:</strong>{" "}
                Croissant Software, MB
              </li>
              <li>
                <strong className="text-foreground">Address:</strong> Eduardo
                Andrė g. 14-5, LT-02232
              </li>
              <li>
                <strong className="text-foreground">Registration code:</strong>{" "}
                307043950 (Registered in Lithuania, Europe)
              </li>
              <li>
                <strong className="text-foreground">Contact:</strong>{" "}
                +37067482766
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
