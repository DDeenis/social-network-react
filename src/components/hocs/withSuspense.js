import * as React from 'react';
import { Suspense } from "react";
import LoaderCircle from "../Common/Loader/LoaderCircle";

export const withSuspense = (Component) => {
    const SuspenseComponent = (props) => {
        return (
            <Suspense fallback={<LoaderCircle />}>
                <Component {...props} />
            </Suspense>
        );
    };

    return SuspenseComponent;
};