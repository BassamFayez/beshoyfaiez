import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const t = await getTranslations("Index");
  const date = new Date();
  return (
    <footer className="my-12">
      <ul className="flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <Link href="/" className="text-muted-foreground">
            {t("nav1")}
          </Link>
        </div>
        <div className="px-5 py-2">
          <Link href="/projects" className="text-muted-foreground">
            {t("nav2")}
          </Link>
        </div>
      </ul>

      <p className="mt-2 text-center  text-muted-foreground">
        &copy; {date.getFullYear()} Beshoy Faiez. All Rights reserved.
      </p>
    </footer>
  );
}
