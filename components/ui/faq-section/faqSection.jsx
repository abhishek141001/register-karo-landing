import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "../button"

export default function FaqSection() {
    return(
        <div className="flex flex-col p-20 gap-6 items-center">
            <span className="text-sm font-normal text-[#EB8D15]">FAQ</span>
            <h2 className="text-[32px]  text-[#272D37] font-bold ">Frequent ask questions</h2>
            <div className="flex flex-col w-full">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
            <Button className='bg-[#1C4670] text-base font-medium px-6 py-6'>Show more</Button>
        </div>
        
    )
}