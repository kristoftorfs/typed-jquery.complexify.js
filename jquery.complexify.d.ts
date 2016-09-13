interface ComplexifyOptions {
    /**
     * A list of passwords that will always return 0% complexity. This can also be achieved by setting a global
     * variable COMPLEXIFY_BANLIST.
     */
    bannedPasswords?: string[];
    /**
     * The minimum number of characters that the password must have in order to be valid. Defaults to 8.
     */
    minimumChars?: number;
    /**
     * This is a scale factor applied to the calculated password strength. It can be used to increase the
     * strength of passwords required. Defaults to 1.
     */
    strengthScaleFactor?: number;
    /**
     * Strict: If a password is contained in the banned list, or contained in any item of the banned list,
     * the password will fail. This means that "123456" will fail as it is in the banned list, but "123"
     * and "345" will also fail as they are substrings of a password in the list.
     *
     * Loose: If a password exactly matches one in the banned list, the password will fail.
     */
    banMode?: "strict" | "loose";
}

interface JQuery {
    /**
     * Complexify aims to provide a good measure of password complexity for websites to use both for giving
     * hints to users in the form of strength bars, and for casually enforcing a minimum complexity for security
     * reasons.
     *
     * @param options
     * @param callback
     */
    complexify(options?: ComplexifyOptions, callback?: (valid: boolean, complexity: number) => void): JQuery;
}
