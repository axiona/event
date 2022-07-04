import Priority from "@alirya/set/priority";
import Once from "@alirya/set/once";
import Set from "./set";

/**
 * Create Set witch {@see Priority}, and {@see Once} capabilities
 */
export default function Create<
    Argument extends unknown[] = unknown[],
    Return extends unknown = unknown
>() : Set<Argument, Return> {

    return new Priority(new Once(new globalThis.Set()))
}