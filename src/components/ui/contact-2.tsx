import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "צור קשר",
  description = "אנחנו זמינים לשאלות, משוב או הזדמנויות לשיתוף פעולה. ספרו לנו כיצד נוכל לעזור!",
  phone = "050-0000000",
  email = "leecohen14@gmail.com",
  web = { label: "clearlee.ai", url: "https://clearlee.ai" },
}: Contact2Props) => {
  return (
    <section className="py-32" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-right">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-right">
                פרטי התקשרות
              </h3>
              <ul className="mr-4 list-disc">
                <li>
                  <span className="font-bold">טלפון: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">אימייל: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">אתר: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">שם פרטי</Label>
                <Input type="text" id="firstname" placeholder="שם פרטי" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">שם משפחה</Label>
                <Input type="text" id="lastname" placeholder="שם משפחה" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">אימייל</Label>
              <Input type="email" id="email" placeholder="אימייל" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">נושא</Label>
              <Input type="text" id="subject" placeholder="נושא" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">הודעה</Label>
              <Textarea placeholder="כתבו כאן את ההודעה שלכם." id="message" />
            </div>
            <Button className="w-full">שליחת הודעה</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
