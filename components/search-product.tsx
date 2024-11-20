"use client";
import {useDebouncedCallback} from "use-debounce";
import {Input} from "@/components/ui/input";
import {useSearch} from "@/contexts/search-contex";

export function Search() {
    const {setSearchQuery} = useSearch();

    // Debounced function for the search
    const handleSearch = useDebouncedCallback((term: string) => {
        setSearchQuery(term); // Update the search query in the context
    }, 300);

    // Function to handle the "Enter" key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearchQuery(e.currentTarget.value); // Set the search query on Enter
        }
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Search"
                onChange={(e) => handleSearch(e.target.value)} // Call debounced function on change
                onKeyDown={handleKeyDown} // Listen for Enter key press
            />
        </div>
    );
}
