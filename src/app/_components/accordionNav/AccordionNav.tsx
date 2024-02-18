"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface AccordionNavsProps {
  title: string;
  icon?: React.FC<SvgProps>;
  menus: {
    id: number;
    title: string;
    icon?: React.FC<SvgProps>;
    handler: () => void;
  }[];
}
export function AccordionNav({
  menus,
  title,
  icon: TitleIcon,
}: AccordionNavsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="w-full border-none">
        <AccordionTrigger className="flex w-full items-start p-2 text-center text-sm font-medium hover:no-underline">
          <div className="flex gap-1 items-center">
            {TitleIcon && <TitleIcon />}
            <span> {title}</span>
          </div>
        </AccordionTrigger>
        {menus.map(({ id, handler, title }) => (
          <AccordionContent key={id} className="py-3 px-5">
            <div className="flex items-center gap-2" onClick={handler}>
              <Checkbox
                id={`${title}-${id}`}
                className="data-[state=checked]:bg-[#4E46B4] data-[state=checked]:border-none data-[state=checked]:text-primary-foreground"
              />
              <label
                htmlFor={`${title}-${id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {title}
              </label>
            </div>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
