"use client";
import React, {createContext, useState, ReactNode} from 'react';

interface SearchContextType {
    searchQuery: string;
    search: boolean;
    setSearchQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);
export const SearchProvider = ({children}: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [search, setSearch] = useState(false);

    React.useEffect(() => {
        setSearch(searchQuery !== '');
    }, [searchQuery]);
    console.log('searchQuery From Context', searchQuery);
    return (
        <SearchContext.Provider value={{searchQuery, setSearchQuery, search}}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = React.useContext(SearchContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
