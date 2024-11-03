import React, {ReactNode} from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetForm({
                                      id,
                                      title,
                                      description,
                                      Trigger,
                                      form,
                                      side,
                                      footer,
                                  }: {
    id: string;
    title: ReactNode;
    description: string;
    Trigger: ReactNode;
    form: ReactNode;
    side: "left" | "right";
    footer: string;
}) {
    return (
        <Sheet>
            <SheetTrigger asChild id={id}>
                {Trigger}
            </SheetTrigger>
            <SheetContent side={side} className="items-center justify-center space-y-5">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>{description}</SheetDescription>
                </SheetHeader>
                {form}
                <SheetFooter>
                    <SheetClose asChild>{footer}</SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
