import {Loader} from "lucide-react";

export default function SpinLoading() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center inset-0">
            <Loader className="animate-spin text-3xl"/>
        </div>
    );
}
