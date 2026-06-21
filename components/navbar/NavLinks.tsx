import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { TextHighlight } from "@/components/ui/text-highlight";

export default function NavLinks() {
  const { links } = siteConfig.navbar;

  return (
    <ul className="flex-1 flex items-center justify-around font-semibold text-[12px] tracking-[0.1em] text-[#1A4DFF] uppercase pr-8">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="transition-opacity">
            <TextHighlight variant="pill" color="#1A4DFF">
              {link.label}
            </TextHighlight>
          </Link>
        </li>
      ))}
    </ul>
  );
}
