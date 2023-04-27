import type { GetStaticProps } from "next";

export type Params = {
    id: string;
};

export type NextI18NContext = GetStaticProps & {
    locale: string;
};

export type ParamsI18NextContext = NextI18NContext & {
    params: Params;
};