import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface SearchContext {
    text: string
    setText: Dispatch<SetStateAction<string>>
    results: SearchResult[]
    setResults: Dispatch<SetStateAction<SearchResult[]>>
}

const SearchContext = createContext<SearchContext | {}>({});

interface SearchContextProvider {
    children: ReactNode;
}

export const SearchContextProvider = ({children}: SearchContextProvider) => {
    const [results, setResults] = useState<SearchResult[] | []>([]);
    const [text, setText] = useState('');
    return (
        <SearchContext.Provider value={{
            text,
            setText,
            results,
            setResults
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => {
    const context = useContext(SearchContext) as SearchContext;
    if (!context) {
        throw new Error(
        'Search component must be used with SearchProvider component',
        );
    }
    return context;
}