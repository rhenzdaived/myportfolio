import {
  FileText,
  Github,
  Linkedin,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-zinc-950 px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Direct contact, resume download, and professional links.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-white/15 bg-white p-6 text-zinc-950 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Primary Contact
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=peliganrhenzdaived@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block break-all text-2xl font-semibold tracking-[-0.04em] transition hover:text-zinc-600 sm:break-normal sm:text-3xl"
            >
              peliganrhenzdaived@gmail.com
            </a>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
              Best for internship opportunities, junior roles, freelance
              inquiries, or project collaborations.
            </p>

            <div className="mt-8 space-y-3 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-zinc-700" />
                <span>Batangas City, Batangas, Philippines</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCallIcon className="h-4 w-4 text-zinc-700" />
                <span>+63 916 709 6300</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href="/resume/Rhenz%20Peligan%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white hover:text-zinc-950"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                  Resume
                </p>
                <p className="mt-2 text-lg font-semibold">View PDF</p>
              </div>
              <FileText size={18} />
            </a>

            <a
              href="https://github.com/rhenzdaived"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white hover:text-zinc-950"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                  GitHub
                </p>
                <p className="mt-2 break-all text-lg font-semibold sm:break-normal">
                  github.com/rhenzdaived
                </p>
              </div>
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/rhenzdaived"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/15 bg-white/5 px-6 py-5 transition hover:bg-white hover:text-zinc-950"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                  LinkedIn
                </p>
                <p className="mt-2 break-all text-lg font-semibold sm:break-normal">
                  linkedin.com/in/rhenzdaived
                </p>
              </div>
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Rhenz Peligan</p>
        </div>
      </div>
    </section>
  );
}
