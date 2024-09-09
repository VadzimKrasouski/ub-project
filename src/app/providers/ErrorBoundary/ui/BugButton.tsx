import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const toggleError = () => {
        setError(true);
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={toggleError}>THROW ERROR</Button>
        </div>
    );
};
