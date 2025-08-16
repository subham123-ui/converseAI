import { DEFAULT_PAGE } from "@/constants"
import {parseAsInteger, parseAsString, useQueryStates} from "nuqs"

export const useAgentsFilters = () => {
    return useQueryStates({
        search: parseAsString.withDefault("").withOptions({clearOnDefault: true}),
        page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({clearOnDefault: true}),
        // limit: parseAsInteger.withDefault(10).withOptions({clearOnDefault: true}),
    })
}